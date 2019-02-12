<template>
  <div class="Input">
    <label for="name">{{name}}</label>
    <input id="name" type="text" value="" :placeholder="placeholder" name="name">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
      name: String,
      placeholder: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../assets/styles/DesignSystem";

.Input {
    line-height: 45px;
    label {
        font-weight: 300;
        font-size: 20px;
        color: #5A6872;
    }
    input {
        width: 100%;
        height: 55px;
        background: $ui-02;
        border: 2px solid $brand-02;
        box-sizing: border-box;
        border-radius: 50px;
        font-weight: 300;
        font-size: 26px;
        color: #CDD1D4;
        padding-left: 21px;
    }
}
</style>
