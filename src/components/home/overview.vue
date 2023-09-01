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
import animationData from "@/assets/WhatIs.lottie.json"; // Replace with your animation JSON file path

export default {
  mounted() {
    this.lottieInstance = Lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      animationData: animationData,
      loop: false,
      autoplay: true,
    });
  },
  beforeDestroy() {
    if (this.lottieInstance) {
      this.lottieInstance.destroy();
    }
  },
};
</script>
<style scoped>
.overview {
  background-color: white;
}

.wiw {
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 2.8px;
}
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
}
</style>
