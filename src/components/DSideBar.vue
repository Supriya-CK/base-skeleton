<template>
  <div class="DSideBar">
    <aside class="menu">
      <p class="menu-label">
        Menu 1
      </p>
      <p class="menu-label">
        Menu 2
      </p>
      <p class="menu-label">
        Menu 3
      </p>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'DSideBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../assets/styles/variables";

.DSideBar{
    position: fixed;
    height: 100vH;
    padding: 2rem 1.5rem 2rem;
    background: $navBar;
    left: 0;
    top: 0;
}
</style>
