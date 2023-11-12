<template>
    <nav>
        <div class="nav_content">
            <div class="nav_menu">
                <a href="#" class="nav_item">Home</a>
                <a href="/#about" class="nav_item">About Us</a>
                <a href="/#services" class="nav_item">Services</a>
                <a href="/#contact" class="nav_item">Contact Us</a>
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
            <!-- Mobile toggler -->
            <div class="navToggler">
                <button v-show="isNavOpen" @click="isNavOpen = false">
                <!-- <span class="material-symbols-outlined"> menu </span> -->
                <img src="../assets/images/menu_hamburger.svg" alt="" srcset="" />
                </button>
                <button  v-show="!isNavOpen" @click="isNavOpen = true">
                <!-- <span class="material-symbols-outlined"> close </span> -->
                    <img src="../assets/images/cancel_icon.svg" alt="" srcset="" />
                </button>
            </div>
        </div>
    </nav>
    <aside v-if="!isNavOpen">
    <!-- logo -->
    <!-- sideMenu -->
    <div class="sidemenu" v-if="isNavOpen == false">
      <a href="#" :class="activeRoute == 'home'? 'active': ''" @click="changeActive('home')">Home</a>
      <a href="#about" :class="activeRoute == 'about'? 'active': ''" @click="changeActive('about')">About</a>
      <a href="#services" :class="activeRoute == 'services'? 'active': ''" @click="changeActive('services')" id="conBtn">Services</a>
      <a href="#contact" :class="activeRoute == 'contact'? 'active': ''" @click="changeActive('contact')">Contact Us</a>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
// import router from "../router";
// toggler component
const isNavOpen = ref(true);
const activeRoute = ref('home')
function changeActive(x) {
  activeRoute.value = x
  isNavOpen.value = true;
}
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
nav{
    width: 100%;
    .nav_menu {
        display: flex;
        gap: 8px;
        a {
            cursor: pointer;
            padding-bottom: 4px;
            border-bottom: 2px solid #00000000;
            &:hover {
                border-bottom: 2px solid #4CAF4F;
            }
        }
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
    .navToggler{
        display: none;
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
        .navToggler {
            display: block;
            button {
                position: relative;
                z-index: 100;
                background-color: #00000000 !important;
                margin: 0 !important;
                padding: 0 !important;
            }
        }
    }
}
aside {
  display: none;
}
aside {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    color: #fff;
    align-items: center;
    .sidemenu {
      width: fit-content;
      background-color: #fff;
      border-radius: 8px 0px 0px 8px;
      height: fit-content;
      color: #000;
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      padding: 1rem 0px;
      a {
        margin: 4px 4px;
        padding: 16px;
        font-size: 16px;
        font-weight: 600;
        color: #000 !important;
        cursor: pointer;
      }
      a.active {
        border-left: 2px solid #4CAF4F;
        font-weight: 600;
        background-color: #4caf4f3f;
      }
    }
  }
</style>