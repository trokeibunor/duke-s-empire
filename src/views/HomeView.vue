<script setup>
import NavBar from '../components/NavBar.vue';
import serviceSection from '../components/serviceSection.vue';
import aboutSection from '../components/aboutSection.vue';
import messageSection from '../components/messageSection.vue';
import ourTestimonial from '../components/ourTestimonials.vue';
import footerSection from '../components/footerSection.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useSiteState } from '../stores/siteState';
const siteState = useSiteState()
</script>

<template>
  <main>
    <loading v-model:active="siteState.isProcessing"
                  loader="dots"
                  color="#2A461C"
                 :can-cancel="true"
                 :is-full-page="true"/>
    <div class="display_image">
      <img src="../assets/images/backdrop_img.png" alt="">
    </div>
   <section class="hero">
    <NavBar/>
    <div class="hero_content">
      <div class="text_section">
       <div class="main_text">
        <h1 style="font-weight: 700;">We Help you</h1>
        <h1 style="font-weight: 300;">get to your <br> Potential</h1>
       </div>
       <div class="sub_text">
        <p>
          We are a team of professionals who are passionate about helping you get to your potential.
          We are a team of professionals who are passionate about helping you get to your potential.
        </p>
       </div>
       <button class="cta">GET STARTED</button>
      </div>
      <div class="image_section">
        <img src="../assets/images/hero_img.png" alt="">
      </div>
    </div>
   </section>
   <!-- -->
  </main>
  <serviceSection/> 
  <aboutSection/>
  <messageSection/>
  <ourTestimonial/>
  <footerSection/>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";
main {
  position: relative;
  overflow: hidden;
  min-height: 100dvh;
  .display_image {
    position: absolute;
    z-index: -1;
    top: -20%;
    right: -15%;
    @media #{$media-mobile} {
      top: -20%;
      right: -70%;
    }
  }
  .hero {
    height: 95dvh;
    .hero_content {
      width: 90%;
      height: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 1rem;
      .image_section {
        align-self: center;
      }
      .text_section {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */
        gap: 1rem;
        .sub_text {
          width: 80%;
        }
      }
      @media #{$media-mobile} {
        display: flex;
        flex-direction: column-reverse;
        gap: 0px;
        .image_section{
          height: 50%;
          img{
            margin-top: 0.5rem;
            width: 100%;
          }
        }
        .text_section {
          height: 50%;
          .main_text {
            h1 {
              font-size: 32px !important;
            }
          }
          .sub_text {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>