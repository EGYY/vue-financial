<template>
  <div class="container">
    <section id="home" class="main-screen-container">
      <MainScreenCaption />
      <img class="main-screen-img" src="../../assets/transactions.png" alt="" />
      <img class="element-main" src="../../assets/element.png" alt="" />
    </section>
  </div>
</template>

<script>
import MainScreenCaption from "./MainScreenCaption.vue";

export default {
  components: {
    MainScreenCaption,
  },
};
</script>

<style scoped>
.main-screen-container {
  display: flex;
  align-items: center;
  padding-top: 250px;
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
  right: 0;
  z-index: -1;
  opacity: 0.6;
}

@media screen and (max-width: 1200px) {
  .main-screen-img {
    opacity: 0.2;
  }
}
@media screen and (max-width: 490px) {
  .main-screen-container {
    .padding-top: 150px;
  }
}
</style>
