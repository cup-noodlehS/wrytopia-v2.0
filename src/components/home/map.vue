<template>
  <div class="map-cont">
    <div class="container-fluid map row align-items-center mx-0">
      <div class="col-lg-6 col-12">
        <div ref="lottieContainer" class="animation-cover"></div>
        <!-- <div id="animation2 container2" class="animation-cover"></div> -->
      </div>
      <div class="col-lg-6 col-12">
        <h1>
          Ready to map your<br />
          story? Let's Go!
        </h1>
        <a href="#" class="btn btn-light btn-map me-2 mb-2 mt-3"
          >BEGIN MAPPING</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import Lottie from "lottie-web";
import animationData from "@/assets/pen.json";
export default {
  mounted() {
    this.lottieInstance = Lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      animationData: animationData,
      loop: true, // Set loop as needed
      autoplay: true, // Autoplay the animation
    });
  },
  beforeDestroy() {
    if (this.lottieInstance) {
      this.lottieInstance.destroy();
    }
  },
};
</script>
