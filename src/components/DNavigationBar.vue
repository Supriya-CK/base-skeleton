<template>
  <div class="DNavigationBar">
    <div class="columns">
      <div class="column is-2 is-offset-2">
        Company Name
      </div>
      <div class="column is-3 is-offset-6">Hi User</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DNavigationBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../assets/styles/variables";
.DNavigationBar {
    position: fixed;
    width: 100%;
    padding: 2rem 1.5rem 2rem;
    background: $navBar;
}
</style>
