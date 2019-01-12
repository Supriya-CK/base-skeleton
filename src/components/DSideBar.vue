<template>
  <div class="DSideBar">
    <aside class="menu">
      <p class="menu-label">
        <font-awesome-icon icon="bars" />
      </p>
      <p class="menu-label">
        <font-awesome-icon icon="folder-open" />
      </p>
      <p class="menu-label">
        <font-awesome-icon icon="calendar-plus" />
      </p>
      <p class="menu-label">
        <font-awesome-icon icon="envelope" />
      </p>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'DSideBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../assets/styles/variables";

.DSideBar{
    position: fixed;
    height: 100vH;
    padding: 2rem 1.5rem 2rem;
    background: #fdfdfd;
    left: 0;
    top: 0;
    box-shadow: 1px 5px 20px #dbdbdc;
    .menu-label {
    margin-bottom: 4em;
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 7px;
    background: white;
    position: relative;
    box-shadow: 7px 3px 28px #dedede;
    &:hover {
      svg {
        font-size: 30px;
      }
    }
    svg {
      font-size: 25px;
      transition: all 0.3s ease;
      color: #707fdd;
      display: flex;
      margin: auto;
      height: 100%;
    }
  }
}
</style>
