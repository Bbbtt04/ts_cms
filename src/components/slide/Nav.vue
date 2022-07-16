<template>
  <div class="nav">
    <div class="logo">
      <img src="@/assets/pic/vue.png" class="img" />
      <div class="title" v-show="!isCollapse">Vue3 + Ts</div>
    </div>

    <el-menu
      default-active="/home"
      class="el-menu-vertical-demo"
      background-color="#0c2135"
      text-color="#b7bdc3"
      :collapse="isCollapse"
      router
    >
      <template v-for="item in router.options.routes" :key="item.path">
        <el-sub-menu
          v-if="item.children?.length > 1 && item?.meta?.hidden !== true"
          :index="item.path"
          :key="item.name"
        >
          <template #title>
            <el-icon>
              <component :is="Document"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="c_item in item.children" :key="c_item.path">
            <el-menu-item :index="c_item.path">
              <el-icon>
                <component :is="c_item.meta?.icon"></component>
              </el-icon>
              <template #title>
                {{ c_item.name }}
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>

        <el-menu-item
          v-if="item.children?.length === 1 && item?.meta?.hidden !== true"
          :index="item.path"
        >
          <!-- <el-icon>
            <i :class="item?.meta!.icon"></i>
          </el-icon> -->
          <el-icon :size="30">
            <component :is="User"></component>
          </el-icon>
          <template #title>
            {{ item.children[0].name }}
            <!-- {{ item.meta.icon }} -->
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Setting,
  Location,
  UserFilled,
  User,
} from "@element-plus/icons-vue";

import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import router from "../../router";
import store from "../../store";
const isCollapse = computed(() => store.state.isCollapse);

onMounted(() => {
  router.push("/home");
});
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}
.nav {
  background-color: #001529;
  height: 100vh;
  .el-menu {
    margin-top: 30px;
  }
}
</style>
