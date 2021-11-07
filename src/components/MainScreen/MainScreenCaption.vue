<template>
  <div class="caption-container">
    <div class="caption-title">
      Получите инструмент для развития вашей компании на 3 года вперед.
    </div>
    <div class="caption-subtitle">
      Финансовая модель вашего бизнеса за 7 дней. Определим основные драйверы
      роста прибыли и дадим рекомендации для развитию вашего бизнеса на опыте
      более 150 компаний.
    </div>
    <div class="caption-btn" @click="showModal">
      Задать вопрос
    </div>
    <Modal
      :visible="visible"
      :title="`Задать вопрос`"
      :handleCancel="handleCancel"
      :handleOk="handleOk"
    />
  </div>
</template>

<script>
import Modal from "../FeedbackModal/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleOk() {
      this.visible = false;
      document.body.classList.remove("modal-open");
    },
    handleCancel() {
      this.visible = false;
      document.body.classList.remove("modal-open");
    },
    showModal() {
      this.visible = true;
      document.body.classList.add("modal-open");
    },
  },
};
</script>

<style scoped>
.caption-container {
  width: 100%;
  max-width: 530px;
}

.caption-title {
  font-weight: bold;
  font-size: 36px;
  color: #000000;
  margin-bottom: 15px;
}

.caption-subtitle {
  color: #7d7987;
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 25px;
}

.caption-btn {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 55px;
  padding: 10px 30px;
  background-color: #458ff6;
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.caption-btn:hover {
  background-color: #3776ce;
  transform: scale(1.01);
}
@media screen and (max-width: 490px) {
  .caption-title{ 
    font-size: 24px;
  }
  .caption-subtitle, .caption-btn {
    font-size: 15px;
  }

}
</style>
