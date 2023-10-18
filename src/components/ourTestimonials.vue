<template>
   <section>
    <div class="content">
        <div class="intro_header">
            <h3>Our Testimonials</h3>
            <h3>What Our Clients Are Saying</h3>
        </div>
        <div class="testimonial_row">
            <div class="testimonial_box">
                <img src="../assets/icons/testimonial_icon.svg" alt="">
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </p>
                <div class="author">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none">
                        <path d="M0 2H11" stroke="#00BA21" stroke-width="3"/>
                    </svg>
                    <p>Emmanuel</p>
                </div>
            </div>
            <div class="testimonial_box">
                <img src="../assets/icons/testimonial_icon.svg" alt="">
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </p>
                <div class="author">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none">
                        <path d="M0 2H11" stroke="#00BA21" stroke-width="3"/>
                    </svg>
                    <p>Emmanuel</p>
                </div>
            </div>
        </div>
    </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
section {
    width: 100%;
    padding: 1.5rem 0px;
    .content {
        width: 70%;
        margin: 1rem auto;
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
        .testimonial_row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 2rem 0px;
            gap: 2rem;
            .testimonial_box {
                background: #FFF;
                box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.08);
                width: 18rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 8px;
                // align-items: center;
                padding: 1.5rem 1rem;
                img {
                    width: 2rem;
                }
                p {
                    font-size: 16px;
                    line-height: 120%;
                }
              .author {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 2px;
              }
            }
            @media #{$media-mobile} {
                flex-direction: column;
              .testimonial_box {
                    width: 100%;
                }
            }
        }
    }
}
</style>