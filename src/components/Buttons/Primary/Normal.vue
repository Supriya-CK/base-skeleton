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
    background: $brand-01;
    border-radius: 40px;
    height: 64px;
    color: $ui-01;
    font-family: Chivo;
    font-weight: 300;
    line-height: normal;
    font-size: 28px;
    text-align: center;
    padding: 0 46px;
    &:hover {
        background: #afd29c;
    }
}
</style>
