<template>
  <div class="container">
    <section class="advantages" id="advantages">
      <div class="main-title">Свойства и выгоды</div>
      <div class="line"></div>
      <div class="main-caption">
        Закажите у нас финансовую модель своего бизнеса и вы узнаете:
      </div>
      <div class="frame">
        <img src="../../assets/Frame.png" alt="" />
      </div>
      <div class="dotes"><img src="../../assets/dotes.png" alt="" /></div>
      <div class="advantages-container">
        <AdvantagesItem
          :image="require(`@/assets/money-control.png`)"
          :title="`Контроль`"
          :caption="`Как получить контроль над 100% своих расходов`"
        />
        <AdvantagesItem
          :image="require(`@/assets/emploers.png`)"
          :title="`Эффективность`"
          :caption="`Как увеличить эффективность сотрудников`"
        />
        <AdvantagesItem
          :image="require(`@/assets/effective.png`)"
          :title="`Развитие`"
          :caption="`Как будет развиваться ваш бизнеса на 3 года вперед`"
        />
        <AdvantagesItem
          :image="require(`@/assets/price.png`)"
          :title="`Стоимость`"
          :caption="`Сколько может стоить весь ваш бизнес`"
        />
        <AdvantagesItem
          :image="require(`@/assets/dohod.png`)"
          :title="`Доход`"
          :caption="
            `Точную сумму, сколько можно забирать себе в карман, без последствий для бизнеса`
          "
        />
        <AdvantagesItem
          :image="require(`@/assets/pribyl.png`)"
          :title="`Прибыль`"
          :caption="`Прибыльность нового направления бизнеса`"
        />
      </div>
      <div class="btn-outlined" @click="showModal">Бесплатная консультация</div>
    </section>
    <Modal
      :visible="visible"
      :title="`Бесплатная консультация`"
      :handleCancel="handleCancel"
      :handleOk="handleOk"
    />
  </div>
</template>

<script>
import AdvantagesItem from "./AdvantagesItem";
import Modal from "../FeedbackModal/Modal.vue";
export default {
  components: {
    AdvantagesItem,
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

<style>
.line {
  height: 2px;
  width: 56px;
  background-color: #000000;
  margin: 25px auto;
}
.advantages {
  padding: 250px 0 50px 0;
  position: relative;
}

.advantages > .frame {
  position: absolute;
  z-index: -1;
  top: -50px;
  width: 100%;
  margin-left: calc(50% - 54vw);
}

.advantages > .frame > img {
  width: 100%;
}

.btn-outlined {
  border: 1.4px solid #458ff6;
  border-radius: 55px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #458ff6;
  width: fit-content;
  padding: 10px 25px;
  margin: 50px auto;
  transition: all 0.2s ease-in-out;
}

.btn-outlined:hover {
  transform: scale(1.01);
  background-color: #458ff6;
  color: #fff;
}

.dotes {
  position: absolute;
  margin-left: calc(50% - 50vw);
  right: 0;
  z-index: -1;
  margin-top: 250px;
  right: 0;
}

.advantages > .main-title {
  font-weight: 700;
  font-size: 36px;
}
.advantages > .main-caption {
  font-weight: 300;
  font-size: 18px;
  color: #7d7987;
}
.advantages > .main-title,
.main-caption {
  text-align: center;
}
.advantages-container {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

@media screen and (max-width: 768px) {
  .advantages {
    padding: 150px 0;
  }
}
@media screen and (max-width: 490px) {
.advantages > .main-title {
  font-size: 25px;
}
.advantages > .main-caption {
  font-size: 15px;
}
.btn-outlined {
  font-size: 15px;
}
}
</style>
