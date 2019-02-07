<template>
  <div class="Features">
    <div class="container is-fluid">
        <div class="columns feature-tabs">
            <div class="column is-one-fifth">
                <p class="border-gamma feature-tab">Personalized Message</p>
            </div>
            <div class="column is-one-fifth">
                <p class="border-gamma feature-tab">Behaviour Campaigns</p>
            </div>
            <div class="column is-one-fifth">
                <p class="border-gamma feature-tab">Custom Segments</p>
            </div>
            <div class="column is-one-fifth">
                <p class="border-gamma feature-tab">Automated Triggers</p>
            </div>
            <div class="column is-one-fifth">
                <p class="border-gamma feature-tab">And so much more</p>
            </div>
        </div>
        <div class="columns">
            <div class="column sticky-nav is-6">
                <div class="feature-box">
                    <h5 class="title">Create Personalized Notifications</h5>
                    <p class="sub-description">Make your users feel special with personalization.
                        Send customized push notifications to your subscribers that
                        address them with their name, previous purchase history, favorite brand,
                        and much more. Boost engagement and convert your users into loyal customers
                        using personalized push notifications.</p>
                </div>
            </div>
            <div class="column feature-image is-6">
            <figure class="image">
                <img src="../../../assets/img/personalized.png">
            </figure>
            </div>
        </div>
        <div class="columns">
            <div class="column is-2">
                <figure class="image is-128x128">
                    <img src="../../../assets/img/feature-illustrator.svg">
                </figure>
            </div>
            <div class="column is-offset-2 is-5">
                <h5 class="gdpr-title">Ohh by the way, we are GDPR ready!</h5>
            </div>
        </div>
        <div class="columns">
            <div class="column is-8">
                <h5 class="get-started">We can supercharge your customer engagement</h5>
            </div>
            <div class="column is-4">
                <button>Get Started</button>
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
        .feature-tab {
            position: relative;
            width: 72%;
            font-weight: normal;
            text-align: center;
            color: $text-01;
        }
    }
    .feature-box {
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;
        height: auto;
        padding: 1.9rem;
        .title {
            font-weight: 300;
            font-size: 36px;
            color: $brand-01;
        }
        .sub-description {
            font-weight: 300;
            font-size: 28px;
            color: $text-01;
        }
    }
    .feature-image {
        .image {
            top: 80px;
        }
    }
    .gdpr-title {
        font-weight: 300;
        font-size: 28px;
        position: relative;
        top: 48px;
        color: $support-04;
    }
    .get-started {
        font-weight: 300;
        font-size: 36px;
        color: $brand-01;
    }
}
</style>
