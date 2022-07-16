<template>
  <div class="container">
    <div class="one_div">
      <div class="user"><user_card /></div>
      <el-card class="dataShow"><el-empty description="还没想好" /></el-card>
    </div>
    <div class="two_div">
      <el-card class="todoList"><Home_table></Home_table></el-card>
      <el-card class="form"><echartsdemo /></el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import user_card from "@/components/user_card/index.vue";
import ECharts from "@/components/ECharts/index.vue";
import echartsdemo from "../../components/ECharts/echarts-demo.vue";
import Home_table from "../../components/table/home_table.vue";
</script>

<style scoped lang="scss">
.container {
  .one_div {
    display: flex;
    justify-content: space-between;
    .user {
      width: 30vw;
      height: 30vh;
    }
    .dataShow {
      width: 54vw;
      height: 30vh;
    }
  }
  .two_div {
    display: flex;
    .todoList {
      padding: 0;
      margin-top: 20px;
      width: 30vw;
      height: 55vh;
    }
    .form {
      flex: 1;
      margin: 20px 0 0 10px;
    }
  }
}
</style>
