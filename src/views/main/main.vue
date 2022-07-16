<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="aside_class">
        <nav-vue></nav-vue>
      </el-aside>
      <el-container>
        <el-header><BThead></BThead> </el-header>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavVue from "../../components/slide/Nav.vue";
import BThead from "../../components/header/header.vue";
import { computed, watch } from "@vue/runtime-core";
import store from "../../store";

const aside_class = computed(() => {
  const sizeWidth = store.state.isCollapse === true ? "66px" : "200px";
  return `width: ${sizeWidth}`;
});
</script>

<style scoped lang="scss">
.el-aside {
  height: 100vh;
  background-color: #001529;
  overflow: hidden;
}
.el-header {
  height: 6.4vh;
  background-color: #fafafa;
  border-bottom: 1px solid #bebbbb;
}
</style>
