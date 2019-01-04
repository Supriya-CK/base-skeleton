<template>
  <div class="Dashboard">
    <DNavigationBar></DNavigationBar>
    <DSideBar></DSideBar>
    <Section></Section>
    <DPageFooter></DPageFooter>
  </div>
</template>

<script>
import DNavigationBar from '@/components/DNavigationBar.vue';
import DSideBar from '@/components/DSideBar.vue';
import DPageFooter from '@/components/DPageFooter.vue';
import Section from './components/Section.vue';

export default {
  name: 'Dashboard',
  components: {
    DNavigationBar,
    DSideBar,
    DPageFooter,
    Section,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Dashboard{

}
</style>
