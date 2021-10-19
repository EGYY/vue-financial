<template>
    <div class="project-item">
        <img :src="src" alt="">
        <div class="project-content">
            <div class="project-title">{{title}}</div>
            <div class="project-caption">{{caption}}</div>
            <div class="project-more-btn">Подробнее →</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            src: String,
            title: String,
            caption: String
        }
    }
</script>

<style>
    .project-item {
        height: 600px;
        border-radius: 20px;
        box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
        background-color: #ffffff;
        flex: 1;
        position: relative;
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
    }

    .project-caption {
        font-size: 16px;
        color: #7D7987;
        font-weight: 300;
        margin-bottom: 30px;
    }

    .project-more-btn {
        font-size: 17px;
        font-weight: 600;
        color: #4089ED;
        position: absolute;
        bottom: 40px;
    }
</style>