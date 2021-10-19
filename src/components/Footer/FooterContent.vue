<template>
    <div class="footer-content">
        <div class="container">
            <div class="logo">
                Business <span>&</span> Digits
            </div>
            <div class="logo-descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </div>
            <div class="protector">
                ©Business & Digits 2021. Все права защищены
            </div>
        </div>
    </div>
</template>

<style>
    .footer-content {
        color: #ffffff;
        height: 200px;
        padding: 60px;
        background: linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);
    }

    .footer-content > .container > .logo {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: #ffffff;
        color: #000000;
        width: fit-content;
        padding: 10px;
        border-radius: 10px;
    }

    .footer-content > .container > .logo > span {
        color: #4089ED;
    }

    .logo-descr, protector {
        max-width: 320px;
        font-size: 18px;
        font-weight: 300;
    }

    .protector {
        margin-top: 25px;
    }
</style>