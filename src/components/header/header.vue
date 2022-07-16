<template>
  <header>
    <div class="l-content">
      <el-button plain @click="handleMenu">
        <el-icon><Menu color="rgb(36, 171, 242)" /></el-icon>
      </el-button>
      <breadVue />
    </div>
    <div class="r-content">
      <div class="full_screen">
        <el-button @click="toggleFullScreen"
          ><el-icon size="20px"><FullScreen /></el-icon>
        </el-button>
      </div>
      <el-dropdown trigger="click">
        <span><img src="@/assets/pic/logo.png" class="user" /></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>更换头像</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import store from "../../store";
import breadVue from "./bread.vue";
import { Menu, FullScreen } from "@element-plus/icons-vue";
import { computed } from "@vue/runtime-core";
import screenfull from "screenfull";
import { ElMessage } from "element-plus";

const logOut = () => {};
const handleMenu = () => {
  store.dispatch("ChangeCollapse");
};
const toggleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle();
    ElMessage;
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  .l-content {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 20px;
    }
  }
  .r-content {
    display: flex;
    justify-content: center;
    align-items: center;
    .full_screen {
      margin-right: 20px;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
