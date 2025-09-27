<script setup>
import { UserService } from "@apis";

const treedata = async () => {
  const res = await UserService.apiUserShowSelfPost();
  console.log(res);
};
// treedata();
</script>

<template>
  <!-- 你的导航栏等布局元素 -->
  <router-view></router-view>
</template>

<style scoped></style>
