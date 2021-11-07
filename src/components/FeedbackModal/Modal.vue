<template>
  <div v-if="visible">
    <div class="details-modal-overlay" @click="handleCancel"></div>
    <div class="details-modal" @click.stop="">
      <div class="details-modal-close" @click.prevent="handleCancel">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="details-modal-title">
        <h1>{{ title }}</h1>
      </div>
      <div class="details-modal-content">
        <div v-if="success" class="success-msg">
          <sweetalert-icon icon="success" />
          <h4>Успешно отправлено!</h4>
        </div>
        <div v-if="loading" class="loading-msg">
          <sweetalert-icon icon="loading" />
          <h4>Загрузка...</h4>
        </div>
        <div v-if="warning" class="loading-msg">
          <sweetalert-icon icon="warning" />
          <h4>Возможно вы не заполнили одно из полей!</h4>
        </div>
        <div v-if="error" class="loading-msg">
          <sweetalert-icon icon="error" />
          <h4>Ошибка выполнения запроса, попробуйте позже!</h4>
        </div>

        <form
          @submit.prevent="getFormValues"
          v-if="!loading && !success && !error && !warning"
        >
          <input name="name" placeholder="Введите ваше имя" />
          <input name="phone" placeholder="Укажите номер телефона" />
          <input name="question" placeholder="Ваш вопрос" />
          <button type="submit">Отправить заявку</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    handleOk: Function,
    handleCancel: Function,
    title: String,
  },
  data() {
    return {
      name: "",
      phone: "",
      question: "",
      success: false,
      error: false,
      loading: false,
      warning: false,
    };
  },
  methods: {
    async sendDataToServer(body) {
      this.loading = true;
      try {
        const url = `https://cors-anywhere.herokuapp.com/https://finmodel.site:8811/notifications/question/`;
        const formData  = new FormData();

        for(const name in body) {
            formData.append(name, body[name]);
        }
        const res = await fetch(url, {
          method: "POST",
          body: formData,
        });
        const json = await res.json();

        if (json.status == "ok") {
          this.success = true;
        }

        if (json.status == "error") {
          this.warning = true;

          setTimeout(() => {
            this.warning = false;
          }, 3000);
        }
        this.loading = false;
      } catch (e) {
        console.log("send data err", e);
        this.error = true;
        this.loading = false;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
    getFormValues(e) {
      this.name = e.target.elements.name.value;
      this.phone = e.target.elements.phone.value;
      this.question = e.target.elements.question.value;
      const body = {
        name: this.name,
        phone: this.phone,
        text: this.question,
      };
      this.sendDataToServer(body);
    },
  },
};
</script>

<style scoped>
.loading-msg,
.success-msg {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sa {
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
form > input {
  border: 2px solid transparent;
  background: rgba(244, 247, 248, 1);
  color: rgba(44, 62, 80, 1);
  transition: all 0.25s ease;
  padding: 15px;
  font-size: 15px;
  width: 100%;
  font-family: "Mulish", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  border-radius: 12px;
  margin-bottom: 20px;
}

form > input:focus {
  background: rgba(240, 243, 244, 1);
  padding-left: 15px;
}

button {
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
  outline: none;
  border: none;
}

button:hover {
  background-color: #3776ce;
  transform: scale(1.01);
}
.details-modal {
  background: #fff;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  left: 50%;
  max-width: 90%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30em;
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  z-index: 4;
}
.details-modal .details-modal-close {
  align-items: center;
  color: #111827;
  display: flex;
  height: 4.5em;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 4.5em;
  cursor: pointer;
}
.details-modal .details-modal-close svg {
  display: block;
}
.details-modal .details-modal-title {
  color: #111827;
  padding: 1.5em 2em;
  pointer-events: all;
  position: relative;
  width: fit-content;
}
.details-modal .details-modal-title h1 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: normal;
}
.details-modal .details-modal-content {
  border-top: 1px solid #e0e0e0;
  padding: 2em;
  pointer-events: all;
  overflow: auto;
}
.details-modal-overlay {
  transition: opacity 0.2s ease-out;
  pointer-events: none;
  background: rgba(15, 23, 42, 0.8);
  position: fixed;
  pointer-events: all;
  opacity: 0.5;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  z-index: 4;
}
</style>
