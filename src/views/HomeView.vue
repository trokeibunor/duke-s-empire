<script setup>
import NavBar from '../components/NavBar.vue';
import serviceSection from '../components/serviceSection.vue';
import aboutSection from '../components/aboutSection.vue';
import messageSection from '../components/messageSection.vue';
import ourTestimonial from '../components/ourTestimonials.vue';
import footerSection from '../components/footerSection.vue';
</script>

<template>
  <main>
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

<style>
main {
  position: relative;
  overflow: hidden;
  min-height: 100dvh;
  .display_image {
    position: absolute;
    z-index: -1;
    top: -20%;
    right: -15%;
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
    }
  }
}
</style>