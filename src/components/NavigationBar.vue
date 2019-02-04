<template>
  <div class="NavigationBar" :class="{'navBarFix': scrolled}">
    <div class="columns container is-fluid">
      <div class="column is-1 links">
        <figure class="image is-128x128">
          <img src="../assets/img/Logo.png">
        </figure>
      </div>
      <div class="column is-1 is-offset-8 links">Pricing</div>
      <div class="column is-1 links">Features</div>
      <div class="column is-1 links">Contact</div>
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
@import "./../assets/styles/DesignSystem";

.NavigationBar{
    position: fixed;
    padding: 2rem 1.5rem 2rem;
    transition: all 0.8s;
    background: transparent;
    z-index: 999;
    width: 100%;
    .links {
      font-family: Chivo;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 16px;
      text-align: center;
      color: $text-01;
      cursor: pointer;
      position: relative;
      padding: 0.75rem 0.75rem 0.75rem 0;
    }
    .image {
      img {
        position: absolute;
        top: -18px;
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
