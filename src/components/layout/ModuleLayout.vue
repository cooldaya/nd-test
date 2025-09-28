<template>
    <div class="flex">
        <ModuleLayoutSideBar v-if="!appLayoutStore.hideSidebar" />
        <div>
            <router-view />
        </div>
    </div>
</template>

<script setup>
import ModuleLayoutSideBar from "./ModuleLayoutSideBar.vue";
import { useAppLayoutStore } from "@/stores/app-layout";
const appLayoutStore = useAppLayoutStore();
</script>

<style lang="scss" scoped>

</style>