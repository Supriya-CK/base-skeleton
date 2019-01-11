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
import DPageFooter from '@/components/DPageFooter.vue';
import DSideBar from '@/components/DSideBar.vue';
import Section from './components/Section.vue';

export default {
  name: 'Dashboard',
  components: {
    DNavigationBar,
    DPageFooter,
    Section,
    DSideBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Dashboard{
  background: #eff2fa;
}
</style>
