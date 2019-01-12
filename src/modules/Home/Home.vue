<template>
  <div class="Home">
    <NavigationBar></NavigationBar>
    <Intro></Intro>
    <Features></Features>
    <Highlights></Highlights>
    <KeyFeatures></KeyFeatures>
    <Explore></Explore>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Intro from './components/Intro.vue';
import Features from './components/Features.vue';
import Highlights from './components/Highlights.vue';
import KeyFeatures from './components/KeyFeatures.vue';
import Explore from './components/Explore.vue';
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Home{
  background: #c6c5f7;
  height: auto;
}
</style>
