<template>
  <div class="Intro">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-4">
          <div class="intro-chat">
            <h6 class="title">CHAT & MESSAGING</h6>
            <p class="description">In app messaging as engaging as any messenger app</p>
            <p class="sub-description">Captivate your customer and community with private messaging,
              groupand public chat rooms - from two users to million</p>
            <!--<button class="button get-started">Get Started</button>-->
            <a class="button google social-login">
              <figure class="image is-32x32">
                <img class="socail-links" src="../../../assets/img/google-signIn.png">
              </figure>
              <span>Sign in with Google</span>
            </a>
            <a class="button facebook social-login">
              <figure class="image is-32x32">
                <img class="socail-links" src="../../../assets/img/facebook-signIn.png">
              </figure>
              <span>Sign in with Facebook</span>
            </a>
            <a class="button twitter social-login">
              <figure class="image is-32x32">
                <img class="socail-links" src="../../../assets/img/twitter.png">
              </figure>
              <span>Sign in with Twitter</span>
            </a>
          </div>
        </div>
        <div class="column is-offset-1 is-7">
          <figure class="image">
            <img src="../../../assets/img/desktops.png">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import constant from '../../../constants';

export default {
  name: 'Intro',
  computed: {
    facebookLoginUrl() {
      return `${constant.API_BASE_URL}auth/facebook`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Intro {
  top: 150px;
  position: relative;
  padding: 2rem 1.5rem 2rem;
  .intro-chat {
    .title {
      font-size: 1.1rem;
    }
    .description {
      font-size: 2.3rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
    }
    .sub-description {
      font-size: 0.9rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
    }
    .get-started {
      font-size: 1rem;
      font-weight: 500;
      width: 200px;
      border: 2px solid transparent;
      height: 50px;
      color: white;
      box-shadow: 4px 8px 29px #9197e4;
      background: #8479e6;
    }
  }
}
</style>
