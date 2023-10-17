<template>
    <section>
        <div class="content">
            <div class="top_row">
                <div class="l_text">
                    <h3>Get in touch</h3>
                    <h3>With Our Experts</h3>
                </div>
                <div class="r_text">
                    <p>Contact us  via the Email box or use the quick chat option, <br> let’s get started on your journey together.</p>
                </div>
            </div>
            <div class="form">
                <div class="form-row">
                    <div class="form-control">
                        <div class="label">First Name</div>
                        <div class="input">
                            <input type="text" placeholder="First Name">
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="label">Last Name</div>
                        <div class="input">
                            <input type="text" placeholder="Last Name">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-control">
                        <div class="label">Email</div>
                        <div class="input">
                            <input type="email" placeholder="First Name">
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="label">Phone Number</div>
                        <div class="input">
                            <input type="number" placeholder="Last Name">
                        </div>
                    </div>
                </div>
                <div class="form-radio-control">
                    <div class="label">
                        Select Subject ?
                    </div>
                    <div class="form-row">
                        <div class="radio-control">
                            <input type="radio" name="subject" id="">
                            <label for="counselling">Counselling</label>
                        </div>
                        <div class="radio-control">
                            <input type="radio" name="subject" id="">
                            <label for="counselling">Resume Review</label>
                        </div>
                        <div class="radio-control">
                            <input type="radio" name="subject" id="">
                            <label for="counselling">Student Visa</label>
                        </div>
                        <div class="radio-control">
                            <input type="radio" name="subject" id="">
                            <label for="counselling">Relocation</label>
                        </div>
                    </div>
                </div>
                <div class="form-message-control">
                    <div class="label">
                        Message
                    </div>
                    <textarea name="message" id=""></textarea>
                </div>
                <button>SEND MESSAGE</button>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
section {
    background-image: url('../assets/images/message_background.png');
    background-position: right top;
    background-repeat: no-repeat;
    padding: 1.5rem 0px;
    .content {
        width: 90%;
        margin: 0 auto;
        .top_row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
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
        .form {
            width: 45%;
            margin: 1rem auto;
            display: flex;
            gap: 1rem;
            flex-direction: column;
            .form-radio-control {
                .label {
                    font-size: 0.75rem;
                    font-weight: 600
                }
            }
            .form-message-control {
                width: 100%;
                display: flex;
                flex-direction: column;
                .label {
                    font-size: 0.75rem;
                    font-weight: 600
                }
                textarea {
                    border-bottom: 1px solid #011C2A;
                    background-color: #ffffff00;
                    width: 100%;
                    padding: 0.5rem 0px;
                    outline: none;;
                }
            }
            .form-row {
                width: 100%;
                display: flex;
                gap: 1rem;
                justify-content: space-between;
                .form-control {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    .label {
                        font-size: 0.75rem;
                        font-weight: 600
                    }
                    input {
                        border-bottom: 1px solid #011C2A;
                        background-color: #ffffff00;
                        width: 100%;
                        padding: 0.5rem 0px;
                        outline: none;;
                    }
                }
                .radio-control {
                    display: flex;
                    gap: 4px;
                    align-items: center;
                    input[type="radio"] {
                        accent-color: #4CAF4F;
                    }
                }
            }
            button {
                align-self: flex-end;
            }
        }
    }
}
</style>