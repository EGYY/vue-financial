<template>
    <div id="app">
        <div class="container">
            <Header/>
            <MainScreen/>
            <Advantages/>
            <StepsModels/>
            <Projects/>
        </div>
        <Footer/>

    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import MainScreen from "./components/MainScreen/MainScreen";
    import Advantages from "./components/Advantages/Advantages";
    import StepsModels from "./components/StepsModels/StepsModels";
    import Projects from "./components/Projects/Projects";
    import Footer from "./components/Footer/Footer";

    export default {
        name: 'App',
        components: {
            MainScreen,
            Header,
            Advantages,
            StepsModels,
            Projects,
            Footer

        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Mulish', sans-serif;
    }

    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
</style>
