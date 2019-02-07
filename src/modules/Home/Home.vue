<template>
  <div class="Home">
    <div class="header">
      <NavigationBar></NavigationBar>
      <Intro></Intro>
    </div>
    <Features></Features>
    <Payments></Payments>
    <GetInTouch></GetInTouch>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Intro from './components/Intro.vue';
import Features from './components/Features.vue';
import Payments from './components/Payments.vue';
import GetInTouch from './components/GetInTouch.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'Home',
  components: {
    NavigationBar,
    PageFooter,
    Intro,
    Features,
    GetInTouch,
    Payments,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Home {
  height: auto;
  .header {
    height: 915px;
    background: url("../../assets/img/background-landing.png") no-repeat;
  }
}
</style>
