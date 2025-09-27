<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :default-active="route.matched[2].path"
      router
      v-if="!isHideHeader"
    >
      <el-menu-item
        v-for="menu in menus"
        :key="menu.fullPath"
        :index="menu.fullPath"
      >
        {{ menu.title }} ({{ menu.fullPath }})
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menus = computed(() => {
  const currentMatched = route.matched[1];
  if (!currentMatched) {
    return [];
  }
  return currentMatched.children.map((item) => ({
    title: item?.meta?.title || item.name,
    fullPath: currentMatched.path + "/" + item.path,
  }));
});


console.log(route)

// 如auth 模块全屏，就不展示header
// /auth/route.js {meta:{fill:表示该模块下的所有页面都不展示header}}
const isHideHeader = computed(() => {
  for (let i = route.matched.length - 1; i >= 0; i--) {
    const currentRoute = route.matched[i];
    if (currentRoute?.meta?.fill) {
      return true;
    }
  }
  return false
});
</script>
