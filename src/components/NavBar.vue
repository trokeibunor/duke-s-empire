<template>
    <nav>
        <div class="nav_content">
            <div class="nav_menu">
                <a href="#" class="nav_item">Home</a>
                <a href="#" class="nav_item">About Us</a>
                <a href="#" class="nav_item">Services</a>
                <a href="#" class="nav_item">Contact Us</a>
            </div>
            <p class="nav_logo">
                Duke's Empire
            </p>
            <div class="social_icons">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/dukes.empire/" target="_blank">
                            <img src="../assets/icons/facebook_icon.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dukes_empire/" target="_blank">
                            <img src="../assets/icons/instagram.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/dukes_empire" target="_blank">
                            <img src="../assets/icons/linkedIn_icon.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
nav{
    width: 100%;
    .nav_menu {
        display: flex;
        gap: 8px
    }
    .nav_content {
        width: 90%;
        margin: 0.75rem auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .social_icons {
            ul {
                display: flex;
                flex-direction: row;
            }
        }
    }
    .nav_logo {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 600;
    }
    // responsiveness
    @media #{$media-mobile} {
        background-color: #ffffff46;
        padding: 0.5rem 0;
        .nav_menu {
            display: none;
        }
        .social_icons {
            display: none;
        }
        .nav_logo {
            font-size: 24px;
            font-weight: 700;
        }
    }
}
</style>