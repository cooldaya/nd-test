<template>
    <div class="flex">
        <ModuleLayoutSideBar />
        <div>
            <router-view />
        </div>
    </div>
</template>

<script setup>
import ModuleLayoutSideBar from "./ModuleLayoutSideBar.vue";
</script>

<style lang="scss" scoped>

</style>