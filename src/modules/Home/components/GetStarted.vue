<template>
  <div class="GetStarted">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-6">
          <div class="started-chat">
            <h6 class="title">Ready to send notifications?</h6>
            <button class="button">Get Started</button>
          </div>
        </div>
        <div class="column is-offset-1 is-5">
          <figure class="image">
            <img src="../../../assets/img/abstract.png">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GetStarted',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.GetStarted {
  top: 150px;
  position: relative;
  padding: 2rem 1.5rem 2rem;
  background: #f4f6f9;
  .started-chat {
      margin-top: 5rem;
    .title {
      font-size: 2rem;
        font-weight: 350;
    }
    .button {
      font-size: 1rem;
      font-weight: 500;
      width: 200px;
      border: 2px solid transparent;
      height: 50px;
      color: white;
      box-shadow: 4px 8px 29px #9197e4;
      background: #8479e6;
    }
  }
}
</style>
