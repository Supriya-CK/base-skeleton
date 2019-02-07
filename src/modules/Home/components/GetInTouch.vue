<template>
  <div class="GetInTouch">
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-offset-2 is-8 form-heading">
                <h6 class="title">Get in touch</h6>
                <p class="details">
                    we are committed to working with you closely<br>
                    send us a message and let’s brainstorm together
                </p>
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-2 is-8 form">
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GetInTouch',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../../assets/styles/DesignSystem";

.GetInTouch {
  position: relative;
  top: 100px;
  padding: 2rem 1.5rem 2rem;
    .form-heading {
        .title {
        text-align: center;
        font-weight: 600;
        line-height: normal;
        font-size: 54px;
        margin: 0;
        color: $support-04;
        }
        .details {
            font-weight: 300;
            line-height: normal;
            font-size: 25px;
            text-align: center;
            color: $ui-04;
        }
    }
    .form {
        height: 310px;
        background: $grad-03;
        opacity: 0.1;
        border-radius: 30px;
    }
}
</style>
