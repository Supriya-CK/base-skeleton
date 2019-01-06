<template>
  <div class="NavigationBar">
    <div class="columns">
      <div class="column is-3 is-offset-1 links">Company Name</div>
      <div class="column is-2 links">Features</div>
      <div class="column is-2 links">Customers</div>
      <div class="column is-2 links">Pricing</div>
      <div class="column is-2 links">Docs</div>
      <div class="column is-2 links">Blog</div>
      <div class="column is-2 is-offset-5 links">Support</div>
      <router-link class="column is-2 links" tag="div" to="/auth/login">Sign In</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../assets/styles/variables";

.NavigationBar{
    position: fixed;
    padding: 2rem 1.5rem 2rem;
    background: transparent;
    .links {
      font-size: 15px;
      cursor: pointer;
    }
}
</style>
