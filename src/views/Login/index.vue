<template>
  <img src="@/assets/pic/background.png" class="bgc" />

  <div class="login">
    <el-form
      :rules="rules"
      ref="FormRef"
      :model="loginData"
      element-loading-background="rgba(0, 0, 0, 0.01)"
      :loading="isloading"
      label-position="left"
      label-width="auto"
      size="large"
    >
      <h1 class="info">Login</h1>
      <el-form-item label="用户名" prop="username" class="username">
        <el-input
          placeholder="请输入用户名"
          v-model="loginData.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="password">
        <el-input
          placeholder="请输入密码"
          v-model="loginData.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        :loading="isloading"
        @click="submitLogin(FormRef)"
        class="loginBtn"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { rules } from "./config/rules";
import { ref, reactive, Ref } from "vue";
import { ElForm, ElMessage, ElLoading } from "element-plus";
import { postrequest } from "../../service/login";
import localCache from "../../utils/cache";
import router from "../../router/index";

const store = useStore();
const name = store.state.name;
const loginData = reactive({
  username: localCache.getCache("username") || "",
  password: localCache.getCache("password") || "",
});
//login
const FormRef = ref(null);
let isloading: Ref<boolean> = ref(false);
const savaCache = () => {
  localCache.setCache("username", loginData.username);
  localCache.setCache("password", loginData.password);
};
const submitLogin = (forEl: InstanceType<typeof ElForm> | undefined) => {
  forEl?.validate((valid) => {
    if (valid) {
      isloading.value = true;
      //保存账号密码
      localCache.clearCache();
      savaCache();
      postrequest("/auth/login", {
        name: loginData.username,
        password: loginData.password,
      })
        .then((res) => {
          isloading.value = false;
          router.replace("/");
        })
        .catch((err) => {
          isloading.value = false;
          console.log(err);
        });
    }
  });
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
.bgc {
  position: absolute;
  z-index: -999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.info {
  font-size: 40px;
  font-weight: 800;
  transform: translate(0, -1.5vh);
  color: linear-gradient(to right, orange, purple);
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 26%;
  height: 40%;
  box-sizing: border-box;
  padding: 1.5vw;
  background-color: rgba(254, 254, 254, 0.36);
  border-radius: 5%;
  .username {
    margin-top: 30px;
  }
  .password {
    margin-top: 30px;
  }
  .loginBtn {
    margin-top: 50px;
    width: 100%;
  }
  ::v-deep .el-input__inner {
    font-size: large;
  }
  ::v-deep .el-input__wrapper {
    background: rgba(254, 254, 254, 0.36);
  }
}
.login:hover {
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.256);
}
</style>
