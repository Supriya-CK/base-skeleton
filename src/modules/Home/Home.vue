<template>
  <div class="Home">
    <NavigationBar></NavigationBar>
    <div class="container is-fluid">

    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'Home',
  components: {
    NavigationBar,
    PageFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Home{
  background: #c6c5f7;
  height: 100vH;
}
</style>
