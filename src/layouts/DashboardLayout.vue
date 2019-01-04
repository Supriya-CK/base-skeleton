<template>
  <div class="DashboardLayout">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
};
</script>

<style lang="scss" scoped>

</style>
