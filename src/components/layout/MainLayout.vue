<template>
  <div class="nd-fill">
    <MainLayoutHeader v-if="!appLayoutStore.hideHeader" />
    <router-view />
  </div>
</template>

<script setup>
import MainLayoutHeader from "./MainLayoutHeader.vue";
import { useAppLayoutStore } from "@/stores/app-layout";
const appLayoutStore = useAppLayoutStore();
</script>

<style lang="scss" scoped></style>
