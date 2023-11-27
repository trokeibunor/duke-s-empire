<template>
    <footer>
        <div class="content">
            <div class="text-side">
                <h2>DE Consult</h2>
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
            </div>
            <div class="location">
                <h2>Contact Us:</h2>
                <div>
                    <p>Location</p>
                    <p>6  Prince Bode Oluwo St, Mende,Maryland,Lagos</p>
                </div>
                <div>
                    <p>Email Us:</p>
                    <a href="mailto:dukeempireconsult@gmail.com">dukeempireconsult@gmail.com</a>
                </div>
                <div>
                    <p>Call us:</p>
                    <a href="tel:+2349071048261">09071048261</a>
                </div>
                <div class="social_icons">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100064204384160&mibextid=ZbWKwL" target="_blank">
                            <img src="../assets/icons/facebook_white.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/dukeempireconsult?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target="_blank">
                            <img src="../assets/icons/instagram_white.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@deconline.ng" target="_blank">
                            <img src="../assets/icons/tic_tok_white.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
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
        .location {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            h2 {
                font-family: 'Playfair Display', serif;
                font-size: 24px;
                font-weight: 600;
            }
            .social_icons {
                    ul {
                        display: flex;
                        flex-direction: row;
                    }
                }
        }
        .map {
            width: 50%;
        }
        @media #{$media-mobile} {
            flex-direction: column;
            gap: 1rem;
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
