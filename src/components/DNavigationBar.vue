<template>
  <div class="DNavigationBar">
    <div class="columns">
      <div class="column is-2 is-offset-1">
        <figure class="image is-64x64">
          <img src="./../assets/img/logo.png">
        </figure>
      </div>
      <div class="column is-2 is-offset-7 profile">
        <span>Hi User
          <font-awesome-icon icon="caret-down" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DNavigationBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../assets/styles/variables";
.DNavigationBar {
    position: fixed;
    width: 100%;
    padding: 1rem 1.5rem 0.1rem;
    background: $navBar;
    box-shadow: 1px 5px 7px #dbdbdc;
    .profile {
      padding: 8px;
      display: flex;
      span {
        padding: 8px;
        margin-top: 12px;
        display: flex;
        position: relative;
      }
      svg {
        position: absolute;
        left: 70px;
        top: 10px;
      }
    }
}
</style>
