<template>
    <footer>
        <div class="content">
            <div class="text-side">
                <h2>Duke's Empire</h2>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </p>
                <div class="subscription-box">
                    <label for="subForm">GET IN TOUCH</label>
                    <form id="subForm">
                        <input type="text" name="email" placeholder="Enter your email">
                        <input type="submit" value="SEND">
                    </form>
                </div>
            </div>
            <div class="map">

            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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
    }
}
</style>