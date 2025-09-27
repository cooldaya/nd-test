<template>
  <div>
    <el-menu class="el-menu-demo" :default-active="route.path" router v-if="!isHideSideBar">
      <template v-for="menu in menus" :key="menu.fullPath">
        <el-sub-menu
          v-if="menu.children && menu.children.length"
          :index="menu.fullPath"
        >
          <template #title>{{ menu.title }} </template>
          <el-menu-item
            v-for="subMenu in menu.children"
            :key="subMenu.fullPath"
            :index="subMenu.fullPath"
          >
            {{ subMenu.title }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :key="menu.fullPath" :index="menu.fullPath">
          {{ menu.title }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const menus = computed(() => {
  const currentMatched = route.matched[2];
  if (!currentMatched) {
    return [];
  }
  return currentMatched.children.map((item) => ({
    title: item?.meta?.title || item.name,
    fullPath: currentMatched.path + "/" + item.path,
    children: (item.children || []).map((subItem) => ({
      title: subItem?.meta?.title || subItem.name,
      fullPath: currentMatched.path + "/" + item.path + "/" + subItem.path,
    })),
  }));
});

// 如auth 模块全屏，就不展示header
// /auth/route.js {meta:{fill:表示该模块下的所有页面都不展示header}}
const isHideSideBar = computed(() => {
  for (let i = route.matched.length - 1; i >= 0; i--) {
    const currentRoute = route.matched[i];
    if (currentRoute?.meta?.fill) {
      return true;
    }
  }
  return false
});
</script>
