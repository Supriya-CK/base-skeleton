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
                <div class="columns is-mobile">
                    <div class="column">
                        <Input :name="'Name of Organization'" :placeholder="'Company name'"></Input>
                        <Input :name="'Message'" :placeholder="'Type your message'"></Input>
                    </div>
                    <div class="column">
                        <Input :name="'Email ID'" :placeholder="'Company email id'"></Input>
                        <SecondaryButton :text="'Lets Talk'"></SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Buttons/Input.vue';
import SecondaryButton from '@/components/Buttons/Secondary/Normal.vue';

export default {
    name: 'GetInTouch',
    components: {
        Input,
        SecondaryButton,
    },
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
        background: linear-gradient(360deg, rgba(90, 104, 114, 0.2) 0%, rgba(244, 247, 251, 0.2) 108.25%);
        border-radius: 30px;
        input {
            width: 89%;
            height: 55px;
        }
        button {
            line-height: 45px;
            width: 89%;
            height: 55px;
            margin: 43px 0;
        }
    }
}
</style>
