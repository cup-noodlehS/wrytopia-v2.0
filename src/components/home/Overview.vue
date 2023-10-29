<template>
  <div class="container-fluid overview pt-4">
    <div class="d-flex flex-column align-items-center mb-3 pt-5">
      <h1 id="wiw-title">WHAT IS WRYTOPIA?</h1>
      <!-- <div id="animation3 container3" class="animation-cover"></div> -->
      <div ref="lottieContainer" class="animation-cover"></div>
    </div>
  </div>
</template>
<script>
import Lottie from "lottie-web";
import animationData from "@/assets/WhatIs.lottie.json";
import mobileAnimationData from "@/assets/mobileWhatIs.json";

export default {
  data() {
    return {
      lottieInstance: null,
      observer: null,
      screenWidth: window.innerWidth,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No additional margin
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    this.observer.observe(this.$refs.lottieContainer);
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in the viewport, start the animation
          if (this.screenWidth > 768) {
            this.lottieInstance = Lottie.loadAnimation({
              container: this.$refs.lottieContainer,
              animationData: animationData,
              loop: false,
              autoplay: true,
            });
          } else {
            this.lottieInstance = Lottie.loadAnimation({
              container: this.$refs.lottieContainer,
              animationData: mobileAnimationData,
              loop: false,
              autoplay: true,
            });
          }
          this.observer.unobserve(entry.target); // Stop observing once animation starts
        }
      });
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  beforeDestroy() {
    if (this.lottieInstance) {
      this.lottieInstance.destroy();
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/variables.scss";

.overview {
  background-color: white;

  #wiw-title {
    color: rgba(0, 0, 0, 0.5) !important;
    text-align: center !important;
    font-feature-settings: "clig" off, "liga" off;
    font-family: clashDisplayMedium !important;
    font-size: 28px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: 20px !important; /* 71.429% */
    letter-spacing: 2.8px !important;

    @media #{$tablet} {
      font-size: 16px !important;
      line-height: 20px;
    }
  }

  .animation-cover {
    width: 80%;
    height: 80%;
  }
}
</style>
