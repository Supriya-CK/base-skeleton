<template>
  <button class="Normal">
    {{text}}
    </button>
</template>

<script>
export default {
    name: 'Normal',
    props: {
        text: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../../assets/styles/DesignSystem";

.Normal {
    border: 4px solid $brand-01;
    border-radius: 40px;
    box-sizing: border-box;
    height: 64px;
    color: $brand-01;
    font-family: Chivo;
    font-weight: 300;
    line-height: normal;
    font-size: 28px;
    text-align: center;
    padding: 0 46px;
    &:hover {
        border: 4px solid #afd29c;
    }
}
</style>
