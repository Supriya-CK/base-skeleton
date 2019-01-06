<template>
  <div class="Login container is-fluid">
    <div class="columns">
      <div class="column">
        <figure class="image is-64x64">
          <img src="../../assets/img/logo.png">
        </figure>
      </div>
    </div>
    <div class="columns">
      <div class="column is-5">
        <figure class="image is-256x256">
          <img src="../../assets/img/frontDesk.jpg">
        </figure>
      </div>
      <div class="column is-5 is-offset-2">
        <h4 class="title">Welcome Back :)</h4>
        <h6 class="subtitle">To keep connected with us please login</h6>
        <a class="button is-small is-rounded is-hovered is-link"><span>Twitter</span></a>
        <a class="button is-small is-rounded is-hovered is-danger">Gmail</a>
        <a class="button is-small is-rounded is-hovered is-link"><span>Facebook</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Login{

}
</style>
