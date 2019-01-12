<template>
  <div class="Section">
    <transition name="fade">
      <div class="tile is-ancestor" v-if="onLoad">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">First column</p>
            <p class="subtitle">With some content</p>
            <div class="content">
              <p>It seeks the realization of a unique and innovative deliverable,
                such as a product,
                a service, a process, or in some cases, a scientific research.
                Each project has a beginning
                and an end, and as such is considered a closed dynamic system. </p>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-8">
          <article class="tile is-child box">
            <p class="title">Second column</p>
            <p class="subtitle">With some content</p>
            <div class="content">
              <p>A project consists of a concrete and organized effort motivated
                by a perceived opportunity when facing a problem, a need, a desire
                or a source of discomfort (e.g.,
                lack of proper ventilation in a building).
                It seeks the realization of a unique and innovative
                deliverable, such as a product, a service, a process,
                or in some cases, a scientific research.
                Each project has a beginning and an end, and as such is
                  considered a closed dynamic system. </p>
            </div>
          </article>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="tile is-ancestor" v-if="onLoad">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Third Column</p>
            <p class="subtitle">What is up?</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Fourth Column</p>
            <p class="subtitle">What is up?</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Fifth column</p>
            <p class="subtitle">With some content</p>
            <div class="content">
              <p>A project consists of a concrete and organized effort
                motivated by a perceived opportunity
                when facing a problem, a need, a desire or a source of
                discomfort (e.g., lack of proper
                ventilation in a building). It seeks the realization of
                a unique and innovative deliverable,
                such as a product, a service, a process, or in some cases,
                a scientific research.</p>
            </div>
          </article>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Section',
  data() {
    return {
      onLoad: false,
    };
  },

  mounted() {
    this.onLoad = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Section {
  padding: 8rem 8rem 1rem;
  .box {
    box-shadow: 1px 5px 10px #dbdbdc;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
}
</style>
