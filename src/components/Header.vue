<template>
    <div class="header">
        <div class="logo">
            Business <span>&</span> Digits
        </div>

        <ul class="menu-naviagation">
            <li class="menu-naviagtion__item active">Главная</li>
            <li class="menu-naviagtion__item">Свойства и выгоды</li>
            <li class="menu-naviagtion__item">Этапы работ</li>
            <li class="menu-naviagtion__item">Кейсы</li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding-top: 30px;
    }

    .logo {
        font-weight: bold;
        font-size: 24px;
    }

    .logo > span {
        color: #458FF6;
    }

    .menu-naviagation {
        display: flex;
        max-width: 460px;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        font-size: 18px;
    }

    .menu-naviagtion__item {
        color: rgba(31, 21, 52, 0.5);
    }

    .menu-naviagtion__item:hover {
        color: #1f1534;
        cursor: pointer;
    }

    .menu-naviagtion__item:not(:first-child) {
        margin-left: 14px;
    }

    .menu-naviagtion__item.active {
        font-weight: bold;
        color: #1f1534;
    }

</style>
