<template>
  <div class="NavigationBar">
    <div class="columns container is-fluid">
      <div class="column is-2 links">
        <figure class="image is-64x64">
          <img src="../assets/img/logo.png">
        </figure>
      </div>
      <div class="column is-2 links">FEATURES</div>
      <div class="column is-3 links">CUSTOMERS</div>
      <div class="column is-2 links">PRICING</div>
      <div class="column is-2 links">DOCS</div>
      <div class="column is-2 links">BLOG</div>
      <div class="column is-2 is-offset-10 links">SUPPORT</div>
      <router-link class="column is-2 links" tag="div" to="/auth/login">SIGN IN</router-link>
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
    z-index: 999;
    .links {
      font-size: 14px;
      color: #38356a;
      font-weight: 500;
      cursor: pointer;
      position: relative;
      padding: 0.75rem 0.75rem 0.75rem 0;
    }
    .image {
      img {
        position: absolute;
        top: -18px;
        left: -10px;
      }
    }
}
</style>
