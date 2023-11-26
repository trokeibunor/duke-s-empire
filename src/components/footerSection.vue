<template>
    <footer>
        <div class="content">
            <div class="text-side">
                <h2>Duke's Empire</h2>
                <p>
                    DE Consult: Your academic and career partner, simplifying the global journey. With precise info and personalized support, we empower your success in education and career prospects worldwide.
                </p>
                <div class="subscription-box">
                    <label for="subForm">GET IN TOUCH</label>
                    <form id="subForm">
                        <input type="text" name="email" placeholder="Enter your email">
                        <input type="submit" value="SEND">
                    </form>
                </div>
                <p>Location: 6  Prince Bode Oluwo St, Mende,Maryland,Lagos</p>
                <a mailto="dukeempireconsult@gmail.com">dukeempireconsult@gmail.com</a>
                <a tel="+2349071048261">09071048261</a>
            </div>
            <div class="location">

            </div>
        </div>
        <p style="width: 100; text-align: center;">2023 &copy; Duke Consult Empire </p>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
footer {
    width: 100%;
    border-top-right-radius: 4rem;
    background-color:#000000;
    color: #fff;
    padding: 1.5rem 0px;
    .content {
        display: flex;
        flex-direction: row;
        width: 90%;
        margin: 1rem auto;
        .text-side {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 50%;
            h2 {
                font-family: 'Playfair Display', serif;
                font-size: 24px;
                font-weight: 600;
            }
            p {
                line-height: 140%;
                width: 55%
            }
            .subscription-box {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                width: 50%;
                label {
                    font-size: 18px;
                    font-weight: 600;
                }
                #subForm {
                    input[type="text"] {
                        width: 70%;
                        padding: 0.5rem 1rem;
                        background-color: #000;
                        border: 1px solid #FFF;
                    }
                    input[type="submit"] {
                        width: 30%;
                        padding: 0.5rem 1rem;
                        border: 1px solid #FFF;
                        color: #000;
                        background: #FFF;
                        font-weight: 600;
                    }
                }
            }
        }
        .map {
            width: 50%;
        }
        @media #{$media-mobile} {
            flex-direction: column;
          .text-side {
            width: 100%;
            .subscription-box,p {
                width: 100%
            }
          }
        }
    }
}
</style>
