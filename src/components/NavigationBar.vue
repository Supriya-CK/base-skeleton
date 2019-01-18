<template>
  <div class="NavigationBar" :class="{'navBarFix': scrolled}">
    <div class="columns container is-fluid">
      <div class="column is-1 links">
        <figure class="image is-64x64">
          <img src="../assets/img/logo.png">
        </figure>
      </div>
      <div class="column is-1 links">FEATURES</div>
      <div class="column is-1 links">CUSTOMERS</div>
      <div class="column is-1 links">PRICING</div>
      <div class="column is-1 links">DOCS</div>
      <div class="column is-1 links">BLOG</div>
      <div class="column is-1 is-offset-4 links">SUPPORT</div>
      <router-link class="column is-1 links" tag="div" to="/auth/login">SIGN IN</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      scrolled: false,
      navBar: false,
    };
  },
  beforeMount() {
    this.scrolled = false;
    if (window.innerWidth >= 575) {
      window.addEventListener('scroll', this.handleScroll);
    } else {
      this.scrolled = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../assets/styles/variables";

.NavigationBar{
    position: fixed;
    padding: 2rem 1.5rem 2rem;
    transition: all 0.8s;
    background: transparent;
    z-index: 999;
    width: 100%;
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
.navBarFix {
  padding: 2rem 1.5rem 0 !important;
  background-color: white !important;
  -webkit-box-shadow: 0 2px 3px 2px #5f5f5f;
  box-shadow: 0 2px 3px 2px #5f5f5f;
}
</style>
