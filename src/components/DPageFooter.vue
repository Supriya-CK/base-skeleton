<template>
  <div class="DPageFooter">
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>App</strong> by Team. The source code is licensed.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DPageFooter',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.DPageFooter{
  position: relative;
  .footer {
    padding: 3rem 1.5rem 2rem;
  }
}
</style>
