<template>
  <div class="map-cont" :class="{ 'slide-right1 show': slide }">
    <div class="container-fluid map row align-items-center mx-0">
      <div class="col-lg-6 col-12">
        <div
          ref="lottieContainer"
          class="animation-cover"
          v-if="screenWidth > 768"
        ></div>
        <!-- <div id="animation2 container2" class="animation-cover"></div> -->
      </div>
      <div class="col-lg-6 col-12 p-0">
        <h1 ref="myElement">
          Ready to map your<br />
          story? Let's Go!
        </h1>
        <div
          ref="lottieContainer"
          class="animation-cover"
          v-if="screenWidth < 768"
        ></div>

        <a href="/#services" class="btn btn-light btn-map me-2 mb-2 mt-3"
          >SCHEDULE AN APPOINTMENT</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import Lottie from "lottie-web";
import animationData from "@/assets/pen.json";
export default {
  data() {
    return {
      slide: true,
      screenWidth: window.innerWidth,
    };
  },
  mounted() {
    this.lottieInstance = Lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      animationData: animationData,
      loop: true, // Set loop as needed
      autoplay: true, // Autoplay the animation
    });

    window.addEventListener("resize", this.handleResize);

    // this.observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       this.slide = true;
    //     }
    //   });
    // });
    // this.observer.observe(this.$refs.myElement);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
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
<style scoped>
.map-cont {
  width: 100% !important;
  opacity: 0;
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
  font-size: 15px;
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
.show {
  opacity: 1;
}
@media only screen and (max-width: 768px) {
  .map {
    padding: 48px 20px;
    text-align: center;
  }
  .map div h1 {
    font-size: 28px !important;
    line-height: 30px !important;
  }
}

/* this is nothing */
</style>
