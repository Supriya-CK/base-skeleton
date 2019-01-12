<template>
  <div class="Intro">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-4">
          <div class="intro-chat">
            <h6 class="title">CHAT & MESSAGING</h6>
            <p class="description">In app messaging as engaging as any messenger app</p>
            <p class="sub-description">Captivate your customer and community with private messaging,
              groupand public chat rooms - from two users to million</p>
            <button class="button">Get Started</button>
          </div>
        </div>
        <div class="column is-offset-1 is-7">
          <figure class="image">
            <img src="../../../assets/img/desktops.png">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Intro',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Intro {
  top: 150px;
  position: relative;
  padding: 2rem 1.5rem 2rem;
  .intro-chat {
    .title {
      font-size: 1.1rem;
    }
    .description {
      font-size: 2.3rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
    }
    .sub-description {
      font-size: 0.9rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
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
