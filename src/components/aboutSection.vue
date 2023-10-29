<template>
    <section>
        <div class="ab_content">
            <div class="img_holder">
                <img src="../assets/images/about_img.png" alt="">
            </div>
            <div class="text_holder">
                <div class="intro_header">
                    <h3>About Us</h3>
                    <h3>What's Our Deal</h3>
                </div>
                <img class="mobile_image" src="../assets/images/about_img.png" alt="">
                <div class="content">
                    <p>
                        DEC Empire is your dedicated global academic and career partner. Our mission is to simplify your journey, offering accurate information and personalized support to empower your success. We're committed to providing the guidance and resources needed for your education and career opportunities worldwide.
                    </p>
                    <p>
                        With DEC Empire by your side, you can confidently navigate the complexities of the academic and professional landscape, ensuring you have the tools to excel and reach your goals in the global arena.
                    </p>
                    <button class="cta">SEND US A MAIL</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
section{
    width: 100%;
    .ab_content {
        width: 90%;
        margin: 0rem auto;
        display: flex;
        align-items: center;
        .img_holder {
            width: 60%;
            img {
                width: 90%;
                height: 90%;
            }
        }
        .text_holder {
            width: 40%;
            .mobile_image {
                display: none;
            }
            .intro_header {
                display: flex;
                flex-direction: column;
    
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
            .content {
                display: flex;
                flex-direction: column;
                margin-top: 0.75rem;
                gap: 0.75rem;
            }
        }
        @media #{$media-mobile} {
            .img_holder {
                display: none;
            }
            .text_holder {
                margin: 1rem 0px;
                width: 100%;
                .mobile_image {
                    display: block;
                }
            }
        }
    }
}
</style>