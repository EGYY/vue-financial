<template>
  <div class="project-item">
    <img :src="src" alt="" />
    <div class="project-content">
      <div class="project-title">{{ title }}</div>
      <div :class="!showAll ? `project-caption-all` : `project-caption`">{{ caption }}</div>
      <div class="project-more-btn" @click="toogle">Подробнее {{!showAll ? '→' : '↓'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    title: String,
    caption: String,
  },
  data() {
      return{
          showAll: false
      }
  },
  methods: {
      toogle() {
          this.showAll = !this.showAll
      }
  }
};
</script>

<style>
.project-item {
  width: 32%;
  margin-bottom: 2%;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 10px 40px 50px rgb(229 233 246 / 40%);
  background-color: #ffffff;
  flex: 1 1 auto;
  position: relative;
  margin: 5px;
}
.project-item > img {
  height: 250px;
  object-fit: cover;
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.project-content {
  padding: 20px 30px;
}

.project-title {
  color: #000000;
  font-size: 21px;
  font-weight: 700;
  margin: 20px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.project-caption {
    font-size: 16px;
    color: #625f69;
    font-weight: 300;
    margin-bottom: 30px;
 
}
.project-caption-all {
    font-size: 16px;
    color: #625f69;
    font-weight: 300;
    margin-bottom: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.project-more-btn {
  font-size: 17px;
  font-weight: 600;
  color: #4089ed;
  cursor: pointer;
 
}

@media screen and (max-width: 490px) {
 .project-title {
  font-size: 18px;
}
.project-caption-all, .project-caption {
    font-size: 14px
}
.project-more-btn {
    font-size: 15px;
}
}
</style>
