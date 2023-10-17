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
                <div class="content">
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
    }
}
</style>