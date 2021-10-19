<template>
    <div class="main-screen-container">
        <MainScreenCaption/>
        <img class="main-screen-img" src="../../assets/transactions.png" alt="">
        <img class="element-main" src="../../assets/element.png" alt="">
    </div>
</template>

<script>
    import MainScreenCaption from './MainScreenCaption.vue'

    export default {
        components: {
            MainScreenCaption
        }
    }
</script>

<style scoped>
    .main-screen-container {
        display: flex;
        align-items: center;
        margin-top: 150px;
    }
    .element-main {
        position: absolute;
        left: 0;
        margin-left: calc(50% - 50vw);
        margin-top: -350px;
    }
    .main-screen-img {
        width: 100%;
        max-width: 750px;
        position: absolute;
        right: -100px;
    }

    @media screen and (max-width: 1200px){

    }
</style>