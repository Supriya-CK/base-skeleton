<template>
  <div class="KeyFeatures">
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-12 feature-image">
                <figure class="image is-64x64">
                    <img src="../../../assets/img/features.png">
                </figure>
            </div>
        </div>
        <div class="columns">
            <div class="column is-12 feature-heading">
                <h6 class="title">Full - Featured chat & messaging in a snap</h6>
            </div>
        </div>
        <div class="columns features">
            <div class="column is-4 feature-image">
                 <figure class="image is-64x64">
                    <img src="../../../assets/img/translate.png">
                </figure>
            </div>
            <div class="column is-4 feature-image">
                 <figure class="image is-64x64">
                    <img src="../../../assets/img/encrypt.png">
                </figure>
            </div>
            <div class="column is-4 feature-image">
                 <figure class="image is-64x64">
                    <img src="../../../assets/img/history.png">
                </figure>
            </div>
        </div>
        <div class="columns feature-description">
            <div class="column is-4">
                <h5 class="title">Push Notifications</h5>
                <p class="sub-description">Captivate your customer
                    and community with private messaging</p>
            </div>
            <div class="column is-4">
                <h5 class="title">Push Notifications</h5>
                <p class="sub-description">Captivate your customer
                    and community with private messaging</p>
            </div>
            <div class="column is-4">
                <h5 class="title">Push Notifications</h5>
                <p class="sub-description">Captivate your customer
                    and community with private messaging</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'KeyFeatures',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.KeyFeatures {
  top: 150px;
  background: white;
  position: relative;
padding: 2rem 0rem 5rem;
    .feature-image {
        display: flex;
        justify-content: center;
    }
    .features {
        .feature-image {
            margin-top: 1rem;
        }
    }
    .feature-heading {
        text-align: center;
        margin-bottom: 2rem;
        .title {
            font-size: 2rem;
            font-weight: 350;
        }
    }
    .feature-description {
        text-align: center;
        .title {
            font-size: 1rem;
            font-weight: 700;
            color: #263792;
            letter-spacing: 0.5px;
        }
        .sub-description {
            font-size: 1rem;
            font-weight: 300;
        }
    }
}
</style>
