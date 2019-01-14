<template>
  <div class="Payments">
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-12 feature-heading">
                <h6 class="title">Flexible Plans & Pricing</h6>
            </div>
        </div>
        <div class="columns boxes">
            <div class="column is-4">
              <div class="payment-box">
                <div class="payment-desc">
                  <h5 class="title">Basic</h5>
                  <p class="sub-description">Great for small buisness</p>
                </div>
                <div class="payment-details">
                    <h2 class="inr">&#36; <span class="rupee">5</span> monthly</h2>
                    <ul class="list">
                        <li class="list-item">24*7 Support</li>
                        <li class="list-item">Advanced Options</li>
                        <li class="list-item">200 Gb Storage</li>
                        <li class="list-item">200 Gb Storage</li>
                    </ul>
                    <button class="button">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="payment-box">
                <div class="payment-desc">
                  <h5 class="title">Plus</h5>
                  <p class="sub-description">Great for small buisness</p>
                </div>
                <div class="payment-details">
                    <h2 class="inr">&#36; <span class="rupee">5</span> monthly</h2>
                    <ul class="list">
                        <li class="list-item">24*7 Support</li>
                        <li class="list-item">Advanced Options</li>
                        <li class="list-item">200 Gb Storage</li>
                        <li class="list-item">200 Gb Storage</li>
                    </ul>
                    <button class="button">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="payment-box">
                <div class="payment-desc">
                  <h5 class="title">Premium</h5>
                  <p class="sub-description">Great for small buisness</p>
                </div>
                <div class="payment-details">
                    <h2 class="inr">&#36; <span class="rupee">5</span> monthly</h2>
                    <ul class="list">
                        <li class="list-item">24*7 Support</li>
                        <li class="list-item">Advanced Options</li>
                        <li class="list-item">200 Gb Storage</li>
                        <li class="list-item">200 Gb Storage</li>
                    </ul>
                    <button class="button">Buy Now</button>
                </div>
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
.Payments {
  top: 150px;
  background: #7664cc;
  position: relative;
  padding: 4rem 3rem 10rem 2rem;
  .feature-heading {
    text-align: center;
    margin-bottom: 1.5rem;
    .title {
      color: white;
      font-weight: 400;
      font-size: 2rem;
    }
  }
  .payment-box {
    width: 80%;
    background: white;
    display: block;
    margin: auto;
    .image {
      float: left;
      width: 40%
    }
    .payment-desc {
        width: 100%;
        background: #4c4896;
        padding: 1rem 0;
      .title {
          margin: 1rem 0rem;
          font-size: 1.5rem;
          font-weight: 500;
          text-align: center;
          color: white;
          margin-bottom: 0;
          letter-spacing: 0.5px;
      }
      .sub-description {
        text-align: center;
        font-size: 1rem;
        margin: 0.5rem 0rem;
        font-weight: 400;
        color: white;
      }
    }
    .payment-details {
        .inr {
            color: #7564cc;
            text-align: center;
            .rupee {
                font-size: 4rem;
            }
        }
        .button {
            font-size: 1rem;
            font-weight: 700;
            color: white;
            background: #4c4896;
            width: 100%;
            border: none;
            border-radius: 0;
        }
        .list {
            margin-top: 1rem;
            box-shadow: none;
            text-align: center;
            .list-item {
                line-height: 30px;
            }
        }
    }
  }
}
</style>
