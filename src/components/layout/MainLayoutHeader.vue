<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :default-active="route.matched[2].path"
      router
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


</script>
