<template>
  <div :class="revert ? `step-model-item revert` : `step-model-item`">
    <div class="step-image">
      <img :src="src" alt="" :class="scale ? `scale` : ''" />
    </div>
    <div :class="revert ? 'step-content left' : 'step-content'">
      <div class="step-title">{{ title }}</div>
      <div class="line left"></div>
      <div class="step-caption">{{ caption }}</div>
      <div class="btn-outlined left" v-if="last">{{ btnText }} ↓</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    title: String,
    caption: String,
    btnText: String,
    revert: Boolean,
    last: Boolean,
    scale: Number,
  },
};
</script>

<style>
.step-model-item {
  display: flex;
  align-items: center;
}

.step-model-item.revert {
  flex-direction: row-reverse;
}

.step-content {
  margin-left: 50px;
}

.step-content.left {
  margin-left: 0;
}

.line.left {
  margin: 25px 0;
}

.btn-outlined.left {
  margin: 50px 0;
}

.step-title {
  font-weight: bold;
  font-size: 36px;
  color: #000000;
}

.step-caption {
  color: #7d7987;
  font-weight: 300;
  font-size: 18px;
}

.step-image {
  max-width: 50%;
}

.step-image > img {
  width: 100%;
}

.step-image > img.scale {
  transform: scale(1.5);
}

@media screen and (max-width: 1052px) {
  .step-content {
    text-align: center;
  }
  .line.left {
    margin: 25px auto;
  }
  .step-model-item,
  .step-model-item.revert {
    flex-direction: column;
    margin-bottom: 10px;
  }
}
</style>
