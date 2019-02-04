<template>
  <div class="Home">
    <div class="header">
      <NavigationBar></NavigationBar>
      <Intro></Intro>
    </div>
    <Features></Features>
    <Highlights></Highlights>
    <KeyFeatures></KeyFeatures>
    <Explore></Explore>
    <GetStarted></GetStarted>
    <Payments></Payments>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Intro from './components/Intro.vue';
import Features from './components/Features.vue';
import Highlights from './components/Highlights.vue';
import KeyFeatures from './components/KeyFeatures.vue';
import Explore from './components/Explore.vue';
import GetStarted from './components/GetStarted.vue';
import Payments from './components/Payments.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'Home',
  components: {
    NavigationBar,
    PageFooter,
    Intro,
    Features,
    Highlights,
    KeyFeatures,
    Explore,
    GetStarted,
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
