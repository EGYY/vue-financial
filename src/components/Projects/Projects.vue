<template>
  <div class="container">
    <section class="projects" id="cases">
      <div class="main-title">Наши кейсы</div>
      <div class="line"></div>
      <div class="projects-container">
        <ProjectItem
          :src="require('@/assets/eng.jpg')"
          :caption="
            `Финансовой модель он-лайн школы показала, что основной драйвер увеличения прибыли - это работа с оттоком студентов. После проработки клиентом указанных рекомендаций, уже через 2 месяца, прибыль он-лайн школы выросла на 28%`
          "
          :title="`Онлайн школа английского языка`"
        />
        <ProjectItem
          :src="require('@/assets/productia.png')"
          :caption="
            `С помощью финансовой модели были определены зоны доходной и расходной части деятельности компании. После привязки зарплаты конкретных сотрудников к уровню продаж и понесенных расходов прибыль компании за один квартал выросла на 46%.`
          "
          :title="`Производство пищевой продукции (шоколадные изделия)`"
        />
        <ProjectItem
          :src="require('@/assets/stroi.jpg')"
          :caption="
            `Финансовая модель формировалась для старт-апа по открытию магазина и дальнейшей передачи в банк для получения кредита в размере 5.000.000 руб. В финмодели было проработано все движение заемных средств, от до возврата в банк с увязкой прибыльности и дальнейшего развития. Указанный кредит был успешно одобрен и выдан предпринимателю. Сегодня эти деньги используются в соответствии с прописанным планом и приносят прибыль.`
          "
          :title="`Магазин строительных материалов (розница-опт)`"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem";

export default {
  components: {
    ProjectItem,
  },
};
</script>

<style>
.projects {
  padding: 150px 0;
}
.projects-container {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.projects > .main-title,
.main-caption {
  text-align: center;
}
.projects > .main-title {
  font-weight: 700;
  font-size: 36px;
}

@media screen and (max-width: 670px) {
  .project-item {
    width: 100%;
  }
}

@media screen and (max-width: 490px) {
  .projects > .main-title {
  font-size: 24px;
}
}
</style>
