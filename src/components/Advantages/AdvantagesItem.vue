<template>
  <div class="advantages-item">
    <div class="icon"><img :src="image" alt="" /></div>
    <div class="title">{{ title }}</div>
    <div class="caption">{{ caption }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    caption: String,
    image: String,
  },
};
</script>

<style scoped>
.advantages-item {
  /* height: 354px; */
  /*width: 100%;*/
  /*max-width: 320px;*/
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.5);
  border-radius: 20px;
  padding: 35px;
  background-color: #fff;
  flex-grow: 1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.advantages-item:hover {
  transform: scale(1.05);
}
.advantages-item > .icon {
  width: 90px;
  height: 90px;
  margin-bottom: 25px;
}
.advantages-item > .icon > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.advantages-item > .title {
  font-weight: 700;
  font-size: 24px;
  color: #000;
  margin-bottom: 15px;
}

.advantages-item > .caption {
  color: #625f69;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  max-width: 230px;
}
@media screen and (max-width: 490px) {
  .advantages-item > .title {
    font-size: 20px;
  }

  .advantages-item > .caption {
    font-size: 14px;
  }
}
</style>
