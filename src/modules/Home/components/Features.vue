<template>
  <div class="Features">
    <div class="container is-fluid">
        <div class="columns feature-tabs">
            <div class="column is-offset-1 is-2">
                <p class="border-gamma feature-tab">Personalized Message</p>
            </div>
            <div class="column is-2">
                <p class="border-gamma feature-tab">Behaviour Campaigns</p>
            </div>
            <div class="column is-2">
                <p class="border-gamma feature-tab">Custom Segments</p>
            </div>
            <div class="column is-2">
                <p class="border-gamma feature-tab">Automated Triggers</p>
            </div>
            <div class="column is-2">
                <p class="border-gamma feature-tab">And so much more</p>
            </div>
        </div>
        <div class="columns">
            <div class="column is-4">
                <div class="columns is-mobile">
                    <div class="column left-features">
                        <div class="feature-box">
                            <h5 class="title">Push Notifications</h5>
                            <p class="sub-description">Captivate your customer
                                and community with private messaging,
                                groupand public chat rooms - from two users to million</p>
                        </div>
                        <div class="feature-box">
                            <h5 class="title">Typing Indicators</h5>
                            <p class="sub-description">Captivate your customer
                                and community with private messaging,
                                groupand public chat rooms - from two users to million</p>
                        </div>
                        <div class="feature-box">
                            <h5 class="title">File & Custom Data Transfers</h5>
                            <p class="sub-description">Captivate your customer
                                and community with private messaging,
                                groupand public chat rooms - from two users to million</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4">
            <figure class="image">
                <img src="../../../assets/img/iphone.png">
            </figure>
            </div>
            <div class="column is-4">
                <div class="columns is-mobile">
                    <div class="column right-features">
                        <div class="feature-box">
                            <h5 class="title">Auto-Thumbnail Generation</h5>
                            <p class="sub-description">Captivate your customer and
                                community with private messaging,
                                groupand public chat rooms - from two users to million</p>
                        </div>
                        <div class="feature-box">
                            <h5 class="title">Read Receipts</h5>
                            <p class="sub-description">Captivate your customer
                                and community with private messaging,
                                groupand public chat rooms - from two users to million</p>
                        </div>
                        <div class="feature-box">
                            <h5 class="title">User-to-User Blocking</h5>
                            <p class="sub-description">Captivate your customer and
                                community with private messaging,
                                groupand public chat rooms - from two users to million</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Features',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../../assets/styles/DesignSystem";

.Features {
  position: relative;
  padding: 2rem 1.5rem 5rem;
    .feature-tabs {
        height: 100px;
        .feature-tab{
            position: relative;
            width: 89%;
            font-weight: normal;
            text-align: center;
            color: $text-01;
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
    .left-features {
        text-align: right;
        margin-top: 2rem;
    }
    .right-features {
        margin-top: 2rem;
    }
    .feature-box {
        margin-bottom: 1rem;
        height: 150px;
        background: #fbfbfb;
        border-radius: 5px;
        padding: 1.3rem;
        .title {
            font-size: 1rem;
            font-weight: 700;
            color: #263792;
            letter-spacing: 0.5px;
        }
        .sub-description {
            font-size: 0.8rem;
            font-weight: 300;
        }
    }
}
</style>
