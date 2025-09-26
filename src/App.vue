<script setup>
import { UserService } from '@apis'

const treedata = async () => {
  const res = await UserService.apiUserShowSelfPost()
  console.log(res)
}
treedata()


</script>

<template>
  <div class="layout tw:bg-red-50 w-100">
    <a href="#" class="group rounded-lg p-8">
  <!-- ... -->
   ssdfd 
  <span class="group-hover:underline">Read more…</span>
</a>
    <el-button @click="treedata">获取用户信息</el-button>
    <!-- 你的导航栏等布局元素 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
