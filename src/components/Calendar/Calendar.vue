<template>
  <div class="container sec">
    <div class="main-title">Платежный календарь</div>
    <div class="line"></div>
    <div class="main-caption">
      Получите форму платежного календаря и уже сейчас начинайте наводить
      порядок в финансах своего бизнеса.
    </div>
    <section class="calendar-container">
      <img :src="require(`@/assets/calendar.png`)" />
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
        <div class="social-selected">
          <b>Получите календарь бесплатно на ваш email</b>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
        </div>
        <input name="name" placeholder="Введите ваше имя" />
        <input type="email" name="email" placeholder="Укажите ваш email" />
        <p class="caption">
          Нажимая на кнопку, вы даете согласие на обработку своих персональных
          данных и соглашаетесь с Пользовательским соглашением
        </p>
        <button type="submit">Получить</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
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
        const url = `https://cors-anywhere.herokuapp.com/https://finmodel.site:8811/notifications/send_schedule/`;
        const formData = new FormData();

        for (const name in body) {
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
      this.email = e.target.elements.email.value;
      const body = {
        name: this.name,
        email: this.email,
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
  width: 50%;
}
.sa {
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-caption {
  font-weight: 300;
  font-size: 18px;
  color: #7d7987;
}
.calendar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.caption {
  font-size: 13px;
  color: rgb(44 62 80 / 69%);
}

.main-title {
  margin-top: 150px;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.social-selected {
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 20px;
}

.social-selected > svg {
  width: 25px;
  height: 25px;
  fill: #458ff6;
  cursor: pointer;
  border: 3px solid transparent;
  padding: 5px;
  border-radius: 12px;
}

.social-selected > svg.active {
  border: 3px solid #458ff6;
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

@media screen and (max-width: 970px) {
  .calendar-container {
    flex-direction: column;
  }
.loading-msg,
.success-msg {
  width: 100%;
}
  .calendar-container > img {
    height: 200px;
  }
}

@media screen and (max-width: 490px) {
  .main-title {
    font-size: 24px;
  }
  .main-caption {
    font-size: 15px;
  }

  button {
    font-size: 15px;
  }
}
</style>
