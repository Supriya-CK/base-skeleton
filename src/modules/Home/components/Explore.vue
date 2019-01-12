<template>
  <div class="Explore">
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-12 feature-heading">
                <h6 class="title">Explore other useful features</h6>
            </div>
        </div>
        <div class="columns">
            <div class="column is-4">
              <div class="explore-box">
                 <figure class="image is-48x48">
                    <img src="../../../assets/img/translate.png">
                </figure>
                <div class="explore-desc">
                  <h5 class="title">Push Notifications</h5>
                  <p class="sub-description">Captivate your customer
                      and community with private messaging</p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="explore-box">
                 <figure class="image is-48x48">
                    <img src="../../../assets/img/translate.png">
                </figure>
                <div class="explore-desc">
                  <h5 class="title">Push Notifications</h5>
                  <p class="sub-description">Captivate your customer
                      and community with private messaging</p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="explore-box">
                 <figure class="image is-48x48">
                    <img src="../../../assets/img/translate.png">
                </figure>
                <div class="explore-desc">
                  <h5 class="title">Push Notifications</h5>
                  <p class="sub-description">Captivate your customer
                      and community with private messaging</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Explore',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Explore {
  top: 150px;
  background: #7664cc;
  position: relative;
  padding: 6rem 3rem 6rem 2rem;
  .feature-heading {
    text-align: center;
    margin-bottom: 1.5rem;
    .title {
      color: white;
      font-weight: 400;
      font-size: 2rem;
    }
  }
  .explore-box {
    height: 120px;
    margin-right: 30px;
    background: white;
    border-radius: 7px;
    display: flex;
    padding: 1.3rem 2rem;
    .image {
      float: left;
      width: 40%
    }
    .explore-desc {
      float: right;
      margin-left: 20px;
      .title {
          font-size: 1rem;
          font-weight: 700;
          color: #263792;
          margin-bottom: 0;
          letter-spacing: 0.5px;
      }
      .sub-description {
          font-size: 0.8rem;
          font-weight: 300;
      }
    }
  }
}
</style>
