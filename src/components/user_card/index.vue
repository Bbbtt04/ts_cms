<template>
  <el-card shadow="hover" class="usercard">
    <img src="@/assets/pic/logo.png" alt="" />
    <span></span>
    <h2 v-copy="poem">{{ poem }}</h2>
    <h5>--- {{ author }}</h5>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
//请求古诗词api
let poem = ref("");
let author = ref("");
axios.get("https://v1.jinrishici.com/rensheng/lizhi").then((res) => {
  poem.value = res.data.content;
  author.value = res.data.author;
});
</script>

<style scoped lang="scss">
.usercard {
  width: 100%;
  height: 100%;
  background-image: url("http://www.zhufengpeixun.cn/main/course/images/img_part3_bg.png");
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  span {
    width: 120px;
    height: 8px;
    display: block;
    background: #1583eb;
    margin: 40px 0 20px 0;
  }
  h2 {
    font-size: larger;
  }
  h5 {
    color: darkgray;
    float: right;
    right: 100px;
  }
}
</style>
