<template>
  <div>
    <el-button @click="toggleFullScreen"
      ><el-icon size="20px"><FullScreen /></el-icon>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { FullScreen } from "@element-plus/icons-vue";
import screenfull from "screenfull";
import { ElMessage } from "element-plus";

const toggleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
};
</script>
