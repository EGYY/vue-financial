<template>
    <div class="footer">
        <FooterMap/>
        <FooterContent/>
        <div class="dotes-footer"><img src="../../assets/dotes-wight.png" alt=""></div>
    </div>
</template>

<script>
    import FooterContent from './FooterContent'
    import FooterMap from './FooterMap'

    export default {
        components: {
            FooterMap,
            FooterContent
        }
    }
</script>

<style>
    .footer {
        position: relative;
    }

    .dotes-footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 115px;
    }
</style>