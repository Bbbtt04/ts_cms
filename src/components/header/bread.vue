<template>
  <div class="bread">
    <el-breadcrumb
      separator="/"
      v-if="router.currentRoute.value.name == '首页'"
    >
      <el-breadcrumb-item><a href="/home">首页</a></el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>

    <el-breadcrumb
      separator="/"
      v-if="router.currentRoute.value.name != '首页'"
    >
      <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a :href="router.currentRoute.value.matched[1]?.path">{{
          router.currentRoute.value.name
        }}</a></el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import router from "../../router";
</script>

<style scoped lang="scss"></style>
