<template>
    <section>
        <div class="intro_header">
            <h3>What We Do</h3>
            <h3>For Your Career</h3>
        </div>
        <div class="service_slider">
            <div class="slider_controller"></div>
            <div class="sliders">
                <div class="slider">
                    <img src="../assets/icons/career_icon.svg" alt="" class="icon">
                    <h5 class="header">
                        Career counselling
                    </h5>
                    <p class="content">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div class="slider">
                    <img src="../assets/icons/career_icon.svg" alt="" class="icon">
                    <h5 class="header">
                        Ticket Reservation
                    </h5>
                    <p class="content">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div class="slider">
                    <img src="../assets/icons/career_icon.svg" alt="" class="icon">
                    <h5 class="header">
                        Hotel Booking
                    </h5>
                    <p class="content">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div class="slider">
                    <img src="../assets/icons/career_icon.svg" alt="" class="icon">
                    <h5 class="header">
                        Student Visa
                    </h5>
                    <p class="content">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
        </div>
        <img src="../assets/images/ellipse-17.png" alt="" class="display_img">
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
section {
    width: 100%;
    background-image: url('../assets/images/service_background.png');
    background-repeat: no-repeat;
    padding: 2rem 0px;
    position: relative;
    overflow: hidden;
    .display_img {
        position: absolute;
        right: -5%;
        width: 25%;
        top: 10%;
        z-index: -1;
        @media #{$media-mobile} {
            display: none;
        }
    }
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
        @media #{$media-mobile} {
            h3 {
                font-size: 24px;
            }
        }
    }
    .service_slider {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 1.5rem;
        position: relative;
        overflow: hidden;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        @media #{$media-mobile} {
            width: 95%;
            margin: 1rem auto;
            overflow: hidden;
        }
        .slider_controller{
            width: 25%;
            @media #{$media-mobile} {
                display: none;
            }
        }
        .sliders {
            width: 75%;
            display: flex;
            flex-direction: row;
            gap: 1rem;
            position: relative;
            overflow: scroll;
            &::-webkit-scrollbar{
                display: none;
            }
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            .slider {
                // width: 20rem;
                // min-height: 12rem;
                padding: 0.7rem;
                border-radius: 1.25rem;
                background: #FFF;
                box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.05);
                h5{
                    font-size: 16px;
                    font-weight: 700;
                    margin: 1rem 0px;
                    line-height: 120%;
                }

            }
            @media #{$media-mobile} {
                width: 100%;
                .slider {
                    .content{
                        width: 12.5rem
                    }
                }
            }
        }
    }
}
</style>