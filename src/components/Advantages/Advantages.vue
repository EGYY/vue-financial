<template>
    <div class="advantages">
        <div class="main-title">Свойства и выгоды</div>
        <div class="line"></div>
        <div class="main-caption">Закажите у нас финансовую модель своего бизнеса и вы узнаете:</div>
        <div class="frame">
            <img src="../../assets/Frame.png" alt="">
        </div>
        <div class="dotes"><img src="../../assets/dotes.png" alt=""></div>
        <div class="advantages-container">
            <AdvantagesItem :title="`Контроль`" :caption="`Как получить контроль над 100% своих расходов`"/>
            <AdvantagesItem :title="`Эффективность`" :caption="`Как увеличить эффективность сотрудников`"/>
            <AdvantagesItem :title="`Развитие`" :caption="`Как будет развиваться ваш бизнеса на 3 года вперед`"/>
            <AdvantagesItem :title="`Стоимость`" :caption="`Сколько может стоить весь ваш бизнес`"/>
            <AdvantagesItem :title="`Доход`" :caption="`Точную сумму, сколько можно забирать себе в карман, без последствий для бизнеса`"/>
            <AdvantagesItem :title="`Прибыль`" :caption="`Прибыльность нового направления бизнеса`"/>
        </div>
        <div class="btn-outlined">Бесплатная консультация</div>
    </div>

</template>

<script>
    import AdvantagesItem from './AdvantagesItem'

    export default {
        components: {
            AdvantagesItem
        }
    }
</script>

<style>
    .line {
        height: 2px;
        width: 56px;
        background-color: #000000;
        margin: 25px auto;
    }
    .advantages {
        margin: 250px 0;
        position: relative;
    }

    .advantages > .frame {
        position: absolute;
        z-index: -1;
        top: -50px;
        width: 100%;
        margin-left: calc(50% - 50vw);
    }

    .btn-outlined {
        border: 1.4px solid #458FF6;
        border-radius: 55px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        color: #458FF6;
        width: fit-content;
        padding: 10px 25px;
        margin: 50px auto;
    }

    .dotes {
        position: absolute;
        margin-left: calc(50% - 50vw);
        right: 0;
        z-index: -1;
        margin-top: 250px;
        right: -70px;
    }

    .advantages > .main-title {
        font-weight: 700;
        font-size: 36px;
    }
    .advantages > .main-caption {
        font-weight: 300;
        font-size: 18px;
        color: #7D7987;
    }
    .advantages > .main-title, .main-caption {
        text-align: center;
    }
    .advantages-container {
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
    }
</style>