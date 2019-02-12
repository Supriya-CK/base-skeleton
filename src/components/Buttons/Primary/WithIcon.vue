<template>
  <button class="WithIcon">
    <span>{{text}}</span>
    <figure class="image is-48x48">
        <img src="../../../assets/img/play-button.svg">
    </figure>
    </button>
</template>

<script>
export default {
    name: 'WithIcon',
    props: {
        text: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../../assets/styles/DesignSystem";

.WithIcon {
    background: $brand-01;
    border-radius: 40px;
    height: 64px;
    display: flex;
    color: $ui-01;
    font-family: Chivo;
    font-weight: 300;
    line-height: normal;
    font-size: 28px;
    text-align: center;
    padding: 0 46px;
    span {
        margin-right: 15px;
        position: relative;
        top: 6px;
    }
    &:hover {
        background: #afd29c;
    }
}
</style>
