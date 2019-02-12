<template>
  <div class="CheckBox">
    <label class="switch">
        <input @change="$emit('checkEvent')" v-model="checkedStatus" type="checkbox" checked>
        <span class="slider round"></span>
        <span class="switch-content" v-if="checked">{{CheckedValue}}</span>
        <span class="switch-content off" v-else>{{UnCheckedValue}}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    text: String,
    checked: Boolean,
    CheckedValue: String,
    UnCheckedValue: String,
  },

  data() {
    return {
      checkedStatus: this.checked,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../assets/styles/DesignSystem";

.CheckBox {
  .switch {
    position: relative;
    display: inline-block;
    width: 144px;
    height: 55px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $ui-01;
    border: 4px solid $ui-04;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 11px;
    bottom: 11px;
    background-color: $ui-04;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    border: 4px solid $brand-01;
    box-sizing: border-box;
    background: $ui-01;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    left: 65px;
    bottom: 10px;
    background-color: $brand-01;
    content: '\2713';
    color: white;
    font-size: 24px;
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
  .switch-content {
    font-size: 16px;
    position: absolute;
    top: 20px;
    left: 27px;
    color: $brand-01;
  }
  .off {
    color: $ui-04;
    top: 20px;
    left: 65px;
  }
}
</style>
