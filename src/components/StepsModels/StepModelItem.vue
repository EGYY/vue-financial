<template>
    <div :class="revert ? `step-model-item revert`: `step-model-item` ">
        <div class="step-image">
            <img :src="src" alt="">
        </div>
        <div :class="revert ? 'step-content left' : 'step-content'">
            <div class="step-title">{{title}}</div>
            <div class="line left"></div>
            <div class="step-caption">{{caption}}</div>
            <div class="btn-outlined left" v-if="last">{{btnText}} ↓</div>
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
        }
    }
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
        color: #7D7987;
        font-weight: 300;
        font-size: 18px;
    }

    .step-image {

    }
</style>