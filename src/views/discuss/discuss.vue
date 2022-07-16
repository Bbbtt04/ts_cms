<template>
  <div class="lazy">
    <div v-for="item in imgList" :key="item.title" class="img_list">
      <img v-lazyload="imgSrc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import imgSrc from "@/assets/pic/background.png";
const imgList = [
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
  {
    name: "lj",
    src: new URL("../../assets/pic/background.png", import.meta.url).href,
    title: "这是lj.png",
  },
];
</script>

<style scoped lang="scss">
.lazy {
  height: 300px;
  width: 200px;
  .img_list img {
    width: 50vw;
    height: 300px;
  }
}
</style>
