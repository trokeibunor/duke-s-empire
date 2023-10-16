<template>
    <section>
        <div class="intro_header">
            <h3>What We Do</h3>
            <h3>For Your Career</h3>
        </div>
        <div class="service_slider">
            <div class="slider_controller"></div>
            <div class="sliders">
                <div class="slider"></div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
section {
    width: 100%;
    background-image: url('../assets/images/service_background.png');
    background-repeat: no-repeat;
    height: 20vh;
    .intro_header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        h3 {
            font-size: 32px;
            font-weight: 700;
            margin: 0;
            line-height: 100%;
        }
        h3:nth-child(2) {
            font-weight: 300;
        }
    }
    .service_slider {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 1.5rem;
        .slider_controller{
            width: 25%
        }
        .sliders {
            width: 75%;
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
    }
}
</style>