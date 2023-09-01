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
        <a href="#services-sub" class="btn btn-light btn-map me-2 mb-2 mt-3"
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
<style scoped>
.map-cont {
  width: 100% !important;
  height: 500px;
}

.map {
  min-height: 400px;
  width: 100%;
  margin-top: 100px !important;
  background-color: #00b18f;
  padding-left: 108px;
  padding-right: 108px;
  padding-top: 54px;
  padding-bottom: 54px;
}
.map img {
  height: 75%;
}
.map div h1 {
  color: white !important;
  font-family: clashDisplayMedium !important;
  font-size: 56px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 66px !important;
}
.btn-map {
  font-size: 17px;
  min-width: 150px;
  font-family: clashDisplayMedium !important;
  background-color: white;
  border-radius: 35px;
  padding-left: 35px !important;
  padding-right: 35px !important;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
  transition: all 0.3s ease;
}
.btn-map:hover {
  transform: translate(-5px, -5px);
  background-color: white !important;
  box-shadow: 5px 5px 0px #01382d;
}
@media only screen and (max-width: 768px) {
  .map {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
}
</style>
