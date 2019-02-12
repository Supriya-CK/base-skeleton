<template>
  <div class="PageFooter">
    <footer class="footer">
      <div class="content container is-fluid">
        <div class="columns">

          <div class="column is-2 footer-left">
            <figure class="image is-96x96">
              <img src="../assets/img/Logo.png">
            </figure>
            <div class="socail-links">
              <figure class="image is-32x32">
                <img src="../assets/img/google.svg">
              </figure>
              <figure class="image is-32x32">
                <img src="../assets/img/facebook.svg">
              </figure>
              <figure class="image is-32x32">
                <img src="../assets/img/github.svg">
              </figure>
            </div>
          </div>
          <div class="column is-2 footer-left">
            <figure class="image is-96x96">
              <img src="../assets/img/gdpr-compilance.svg">
            </figure>
          </div>


          <div class="column is-3 footer-middle">
            <Input :name="'Subscribe to newletters'" :placeholder="'Enter your email'"></Input>
            <SecondaryButton :text="'Subscribe'"></SecondaryButton>
          </div>

          <div class="column is-5 footer-right">
            <p class="headings">Product</p>

            <div class="columns is-mobile">
              <div class="column is-half">
                <h6 class="sub-heading">Features</h6>
                <ul>
                  <li>- Setup custom campaigns</li>
                  <li>- Add multiple customer segments</li>
                  <li>- Automatically trigger your events</li>
                  <li>- Support Browsers, Android and iOS devices</li>
                  <li>- Maintain GDPR compliance</li>
                  <li>- Test and deploy live</li>
                  <li>- Zero step configuration</li>
                </ul>             
              </div>
              <div class="column">
                <h6 class="sub-heading">Pricing</h6>
                <ul>
                  <li>- Starter Plan</li>
                  <li>- Scale Plan</li>
                  <li>- Pay as you go</li>
                </ul>
                <h6 class="sub-heading">Contact</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Input from '@/components/Buttons/Input.vue';
import SecondaryButton from '@/components/Buttons/Secondary/Normal.vue';

export default {
  name: 'PageFooter',
  components: {
    Input,
    SecondaryButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../assets/styles/DesignSystem";

.PageFooter{
  position: relative;
  top: 150px;
  width: 100%;
  background: $grad-03;
  .footer {
    background: transparent;
    padding: 0;
    .content {
      .footer-middle {
        button {
          width: 100%;
          height: 55px;
          margin-top: 20px;
        }
      }
      .footer-right {
        .headings {
          font-weight: 300;
          font-size: 28px;
          color: $text-02;
          margin-bottom: 0.5rem;
        }
        .sub-heading {
          font-weight: normal;
          font-size: 16px;
          color: $text-02;
          margin-bottom: 0.5em;
        }
        ul {
          margin-left: 0;
          margin-bottom: 1rem;
          li {
            font-weight: normal;
            font-size: 12px;
            color: $text-02;
          }
        }
      }
      .socail-links {
        display: flex;
        .image {
          margin: 0 1rem;
        }
        ul {
          display: flex;
          li {
            margin-top: 0.25rem;
          }
          .image.is-32x32 {
            margin: 0 0.3rem;
          }
        }
      }
    }
  }
}
</style>
