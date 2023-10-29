<template>
  <div class="cover row overflow-hidden m-0">
    <div
      class="cover-tagline mb-1 pb-3 col-12 col-lg-6 d-flex justify-content-center align-items-center slide-right1 delay1"
    >
      <div
        id="tagline"
        class="d-flex flex-column justify-content-start align-items-center"
      >
        <h1 class="mb-3">
          Empowering <span class="idk">Authors,</span> Framing Stories
        </h1>
        <p class="mb-3">
          Wrytopia is a reliable third-party agent committed to assisting global
          English writers by providing high-quality writing services that pave
          the way for your writing carer.
        </p>
        <div
          ref="lottieContainer"
          class="animation-cover"
          v-if="isTablet"
        ></div>
        <div
          class="tagline-buttons container-fluid d-flex justify-content-start p-0"
        >
          <a
            href=""
            class="btn btn-success btn-write me-2 mb-2"
            data-bs-toggle="modal"
            data-bs-target="#modalWrite"
            >WRITE ME AN OUTLINE</a
          >
          <a
            href=""
            class="btn btn-success btn-revise me-2 mb-2"
            data-bs-toggle="modal"
            data-bs-target="#modalRevise"
            >REVISE ME AN OUTLINE</a
          >
        </div>
      </div>
    </div>
    <div
      class="cover-img px-3 col-12 col-lg-6 d-flex justify-content-center align-items-center slide-left1 delay4"
    >
      <div ref="lottieContainer" class="animation-cover" v-if="!isTablet"></div>
    </div>
  </div>
  <CoverModals />
</template>
<script>
import Lottie from "lottie-web";
import animationData from "@/assets/Hero.lottie.json";

import CoverModals from "./cover/CoverModals.vue";

export default {
  name: "Cover",
  components: { CoverModals },
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    isTablet() {
      return this.screenWidth < 768;
    },
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  mounted() {
    this.lottieInstance = Lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
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
.cover {
  width: 100%;
  min-height: 83.5vh;
  padding-bottom: 1%;
  padding-left: 108px;
  padding-right: 108px;

  @media #{$tablet} {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 30px;
  }
}
#tagline {
  h1 {
    color: $black !important;
    font-family: clashDisplayMedium !important;
    font-size: 56px !important;
    font-style: normal !important;
    font-weight: 600 !important;
    line-height: 66px !important;

    @media #{$tablet} {
      font-size: 28px !important;
      text-align: center;
      line-height: 40px !important;
    }
  }

  p {
    font-family: "Poppins" !important;
    font-size: 18px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 30px !important;
    color: $gray !important;

    @media #{$tablet} {
      text-align: center;
      color: var(--Gray, $gray) !important;
    }
  }

  .tagline-buttons {
    .btn-write {
      font-size: 15px;
      min-width: 150px;
      font-family: clashDisplayMedium !important;
      color: white !important;
      border-color: $accent !important;
      background-color: $accent;
      border-radius: 35px;
      padding-left: 35px !important;
      padding-right: 35px !important;
      padding-top: 23px !important;
      padding-bottom: 23px !important;
      transition: all 0.3s ease;

      &:hover {
        background-color: #027962;
        transform: translate(5px, -5px);
        box-shadow: -5px 5px 0px #43cfb3;
      }
    }
    .btn-revise {
      font-size: 15px;
      min-width: 150px;
      font-family: clashDisplayMedium !important;
      color: $accent !important;
      border-color: $accent !important;
      background-color: white;
      border-width: 2px;
      border-radius: 35px;
      padding-left: 35px !important;
      padding-right: 35px !important;
      padding-top: 23px !important;
      padding-bottom: 23px !important;
      transition: all 0.3s ease;

      &:hover {
        transform: translate(5px, -5px);
        box-shadow: -5px 5px 0px #027962;
        background-color: #ebeef2;
      }
    }

    @media #{$tablet} {
      flex-wrap: wrap !important;
      justify-content: center !important;
    }
  }
}
</style>
