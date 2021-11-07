<template>
  <div id="app">
    <Header />
    <MainScreen />
    <Advantages />
    <StepsModels />
    <Calendar/>
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainScreen from "./components/MainScreen/MainScreen";
import Advantages from "./components/Advantages/Advantages";
import StepsModels from "./components/StepsModels/StepsModels";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
export default {
  name: "App",
  components: {
    MainScreen,
    Header,
    Advantages,
    StepsModels,
    Calendar,
    Projects,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: "Mulish", sans-serif;
}

body.modal-open {
  overflow: hidden;
}

.container {
  width: calc(100% - 30px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
}

@media screen and (max-width: 980px) {
  .container {
    padding: 0 15px;
  }
}
</style>
