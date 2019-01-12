<template>
  <div class="Highlights">
        <div class="columns">
            <div class="column is-6 left-highlight">
                <div class="container is-fluid">
                     <div class="columns">
                        <div class="column is-12 highlight-image">
                            <figure class="image is-64x64">
                                <img src="../../../assets/img/chat.png">
                            </figure>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-12 highlight-heading">
                            <h6 class="title">Chatbot Interface</h6>
                            <p class="sub-description">Captivate your customer and
                                community with private messaging,
                                groupand public chat rooms - from two users to million</p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-offset-3 is-6 image-box">
                            <figure class="image">
                                <img src="../../../assets/img/highlights-left.png">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-6 right-highlight">
                <div class="container is-fluid">
                     <div class="columns">
                        <div class="column is-12 highlight-image">
                            <figure class="image is-64x64">
                                <img src="../../../assets/img/chat.png">
                            </figure>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-12 highlight-heading">
                            <h6 class="title">Invitations</h6>
                            <p class="sub-description">Captivate your customer and
                                community with private messaging,
                                groupand public chat rooms - from two users to million</p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-offset-3 is-6 image-box">
                            <figure class="image">
                                <img src="../../../assets/img/highlights-left.png">
                            </figure>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'Highlights',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Highlights {
  top: 150px;
  background: white;
  position: relative;
    padding: 4rem 0;
    .highlight-image {
        display: flex;
        margin-top: 4rem;
        justify-content: center;
    }
    .highlight-heading {
        text-align: center;
        margin: 1rem 0;
        .title {
            color: #f1f1f1;
            font-weight: 400;
            font-size: 1.4rem;
        }
        .sub-description {
            color: #f1f1f1;
        }
    }
    .image-box {
        .image {
            max-width: 100%;
            margin-bottom: 2rem;
        }
    }
  .left-highlight {
      background: #867cdf;
  }
  .right-highlight {
      background: #3c3d6c;
  }
}
</style>
