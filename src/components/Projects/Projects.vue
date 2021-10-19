<template>
    <div class="projects">
        <div class="main-title">Наши кейсы</div>
        <div class="line"></div>
        <div class="projects-container">
            <ProjectItem :src="require('../../assets/eng.jpg')"
                         :caption="`Финансовой модель он-лайн школы показала, что основной драйвер увеличения прибыли - это работа с оттоком студентов. После проработки клиентом указанных рекомендаций, уже через 2 месяца, прибыль....`"
                         :title="`Онлайн школа английского языка`"/>
            <ProjectItem :src="require('../../assets/eng.jpg')"
                         :caption="`С помощью финансовой модели были определены зоны доходной и расходной части деятельности компании. После привязки зарплаты конкретных сотрудников к уровню пр...`"
                         :title="`Производство пищевой продукции (шоколадные изделия)`"/>
            <ProjectItem :src="require('../../assets/eng.jpg')"
                         :caption="`Финансовая модель формировалась для старт-апа по открытию магазина и дальнейшей передачи в банк для получения кредита в размере 5.000.000 ....`"
                         :title="`Магазин строительных материалов (розница-опт)`"/>

        </div>
    </div>

</template>

<script>
    import ProjectItem from "./ProjectItem";

    export default {
        components: {
            ProjectItem
        }
    }
</script>

<style>
    .projects {
        margin: 150px 0;
    }
    .projects-container {
        margin-top: 50px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }
    .projects > .main-title, .main-caption {
        text-align: center;
    }
    .projects > .main-title {
        font-weight: 700;
        font-size: 36px;
    }

</style>