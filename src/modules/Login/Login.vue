<template>
  <div class="Login">
    <div class="columns container is-fluid">
      <div class="column">
        <figure class="image is-128x128">
          <img src="../../assets/img/logo.png">
        </figure>
      </div>
    </div>
    <div class="columns container is-fluid">
      <div class="column is-5">
        <figure class="image is-256x256">
          <img src="../../assets/img/frontDesk.jpg">
        </figure>
      </div>
      <div class="column is-5 is-offset-2">
        <h4 class="title">Welcome Back :)</h4>
        <h6 class="subtitle">To keep connected with us please login
          <figure class="image is-32x32 bell">
            <img src="../../assets/img/bell-icon.png">
          </figure>
        </h6>
        <a class="button google social-login">
           <figure class="image is-32x32">
            <img class="socail-links" src="../../assets/img/google-signIn.png">
          </figure>
          <span>Sign in with Google</span>
        </a>
        <a class="button facebook social-login">
           <figure class="image is-32x32">
            <img class="socail-links" src="../../assets/img/facebook-signIn.png">
          </figure>
          <span>Sign in with Facebook</span>
        </a>
        <a class="button twitter social-login">
          <figure class="image is-32x32">
            <img class="socail-links" src="../../assets/img/twitter.png">
          </figure>
          <span>Sign in with Twitter</span>
        </a>
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
  background: #f8fafb;
  padding: 10px;
  .title {
    font-weight: 400;
    font-size: 45px;
  }
  .subtitle {
    margin-top: 1.5rem;
  }
  .bell {
    display: inline-block;
    top: 9px;
  }
}
</style>
