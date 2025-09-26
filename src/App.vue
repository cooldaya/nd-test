<script setup>
import { UserService } from '@apis'

const treedata = async () => {
  const res = await UserService.apiUserShowSelfPost()
  console.log(res)
}
treedata()


</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
