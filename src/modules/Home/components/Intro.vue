<template>
  <div class="Intro">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-8">
          <div class="intro-chat">
            <p class="border-alpha">
              <span class="display-mega">Engage</span> your customers
            </p>
            <p class="border-alpha push-right">
              with <span class="display-mega">meaningful</span> notifications
            </p>
            <p class="border-alpha">
              <span class="display-mega">stop</span> sending emails
            </p>
            <p class="border-alpha push-right-little">
              <span class="display-mega">go green</span> with PushScale
            </p>
            <!--<button class="button get-started">Get Started</button>-->
          </div>
        </div>
      </div>
      <div class="columns social-links">
        <div class="column is-4">
            <a class="button google social-login">
              <figure class="image is-48x48">
                <img class="socail-links" src="../../../assets/img/google.svg">
              </figure>
              <span>Continue with Google</span>
            </a>
            <a class="button facebook social-login">
              <figure class="image is-48x48">
                <img class="socail-links" src="../../../assets/img/facebook.svg">
              </figure>
              <span>Continue with Facebook</span>
            </a>
            <a class="button github social-login">
              <figure class="image is-48x48">
                <img class="socail-links" src="../../../assets/img/github.svg">
              </figure>
              <span>Continue with Twitter</span>
            </a>
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
@import "./../../../assets/styles/DesignSystem";

.Intro {
  //top: 150px;
  position: relative;
  padding: 2rem 1.5rem 2rem;
  .intro-chat {
    .border-alpha {
      color: $text-02;
    }
    .push-right {
      left: 31%;
      position: relative;
    }
    .push-right-little {
      position: relative;
      left: 10%;
    }
    .display-mega {
      color: $text-01;
    }
  }
  .social-links {
    position: relative;
    top: 100px;
  }
}
</style>
