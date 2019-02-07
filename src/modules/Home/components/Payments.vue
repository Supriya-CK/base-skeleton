<template>
  <div class="Payments">
    <div class="container is-fluid">
      <div class="columns">
          <div class="column is-offset-2 is-8 payments-heading">
              <h6 class="title">Pricing</h6>
              <p class="details">
                Choose from either fixed rate or pay as you plan<br>
                Upgrade anytime, no hassle<br>
                Simple plans, no brainer
              </p>
          </div>
        </div>

        <div class="columns">
          <div class="column is-offset-7 is-5 payments-button">
              <h6 class="left">Show Flexible Plan</h6>
              <button>Get Started</button>
              <h6 class="right">Show Fixed Plans</h6>
          </div>
        </div>

        <div class="columns">
          <div class="column is-offset-1 is-5 payments-box">
            <div>
              <div class="price-box">
                <h6 class="title">Starter Plan</h6>
                <h6 class="per-month">$<span>9</span>.99/month</h6>
              </div>
              <ul class="price-features">
                <li>
                  <figure class="image is-32x32">
                    <img src="../../../assets/img/checked.svg">
                  </figure>
                  Unlimited custom campaigns
                </li>
                <li>
                  <figure class="image is-32x32">
                    <img src="../../../assets/img/checked.svg">
                  </figure>
                  Unlimited customer segments
                </li>
                <li>
                  <figure class="image is-32x32">
                    <img src="../../../assets/img/checked.svg">
                  </figure>
                  5 Automated triggers
                </li>
                <li>
                  <figure class="image is-32x32">
                    <img src="../../../assets/img/checked.svg">
                  </figure>
                  50K Monthly notifications
                </li>
              </ul>
              <button>Subscribe Now</button>
            </div>
          </div>
          <div class="column is-5 sticky-nav payments-box">
            <div>
              <div class="price-box">
                <h6 class="title">Starter Plan</h6>
                <h6 class="per-month">$<span>9</span>.99/month</h6>
              </div>
              <ul class="price-features">
                <li>
                  <figure class="image is-32x32">
                    <img src="../../../assets/img/checked.svg">
                  </figure>
                  Unlimited custom campaigns
                </li>
                <li>
                  <figure class="image is-32x32">
                    <img src="../../../assets/img/checked.svg">
                  </figure>
                  Unlimited customer segments
                </li>
                <li>
                  <figure class="image is-32x32">
                    <img src="../../../assets/img/checked.svg">
                  </figure>
                  5 Automated triggers
                </li>
                <li>
                  <figure class="image is-32x32">
                    <img src="../../../assets/img/checked.svg">
                  </figure>
                  50K Monthly notifications
                </li>
              </ul>
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Payments',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../../assets/styles/DesignSystem";

.Payments {
  position: relative;
  top: 30px;
  .payments-heading {
    .title {
      text-align: center;
      font-weight: 600;
      line-height: normal;
      font-size: 54px;
      margin: 0;
      color: $support-04;
    }
    .details {
      text-align: center;
      font-weight: 300;
      font-size: 28px;
      color: $ui-04;
    }
  }
  .payments-button {
    display: flex;
    margin: 0 auto;
    h6 {
      font-weight: normal;
      font-size: 20px;
      text-align: center;
      color: $text-02;
    }
    button {
      margin: 0 50px;
    }
  }
  .sticky-nav {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  }
  .payments-box {
    margin-top: 4rem;
    .price-box {
      margin-bottom: 3rem;
      .title {
        text-align: center;
        font-weight: 600;
        font-size: 48px;
        color: $support-04;
        margin: 0;
      }
      .per-month {
        text-align: center;
        font-weight: 300;
        line-height: normal;
        font-size: 36px;
        color: $brand-01;
        span {
          font-weight: 600;
          font-size: 54px;
        }
      }
    }
    .price-features {
      padding: 0 3rem;
      li {
        height: 100px;
        font-weight: 300;
        line-height: normal;
        font-size: 28px;
        color: $ui-04;
        display: -webkit-box;
      }
      .image {
        margin-right: 1.5rem;
      }
    }
  }
}
</style>
