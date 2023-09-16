<template>
  <div class="cover row overflow-hidden m-0">
    <div
      class="cover-tagline mb-1 pb-3 col-12 col-lg-6 d-flex justify-content-center align-items-center slide-right1 delay1"
    >
      <div
        id="tagline"
        class="d-flex flex-column justify-content-start align-items-center"
      >
        <h1 class="mb-3">Empowering Authors, Framing Stories</h1>
        <p class="mb-3">
          Wrytopia is a reliable third-party agent committed to assisting global
          English writers by providing high-quality writing services that pave
          the way for your writing carer.
        </p>
        <div
          ref="lottieContainer"
          class="animation-cover"
          v-if="screenWidth < 768"
        ></div>
        <div
          class="tagline-buttons container-fluid d-flex justify-content-center p-0"
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
      <!-- <div id="animation1 container1" class="animation-cover"></div> -->
      <div
        ref="lottieContainer"
        class="animation-cover"
        v-if="screenWidth > 768"
      ></div>
    </div>
  </div>

  <div
    class="modal fade"
    id="modalWrite"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            WRITE ME AN OUTLINE
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          An outline is not merely a roadmap for your story; it's the backbone
          that shapes your narrative and propels it forward. It’s not just a
          tool for writers; it's a strategy for successfully passing the review
          process of the editors. So, before you embark on your next writing
          journey, remember that a well-defined outline is your most potent
          ally. <br /><br />Uncertain about where to begin with your outline?
          Join forces with our experts!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" id="contact-us">
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="modalRevise"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            REVISE ME AN OUTLINE
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Revising the outline of your story may initially seem like a tiring
          task, but it is a critical step on the path to writing success,
          especially when aiming to get your story get your desired contract on
          online writing platforms. A well-revised outline ensures that your
          narrative is finely tuned, with a clear structure, engaging plot
          points, and well-developed characters.<br /><br />Tired from revising
          your outline? Collaborate with us!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" id="contact-us">
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Lottie from "lottie-web";
import animationData from "@/assets/Hero.lottie.json"; // Replace with your animation JSON file path

export default {
  data() {
    return {
      screenWidth: window.innerWidth,
    };
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
#contact-us {
  font-family: clashDisplayMedium !important;
  border-radius: 30px;
  border-width: 2px !important;
  border-color: #00b18f !important;
  transition: all 0.6s ease !important;
  color: #00b18f !important;
}
#contact-us:hover {
  color: white !important;
  background-color: #00b18f;
  border-color: #00b18f !important;
}
.cover {
  width: 100%;
  min-height: 83.5vh;
  padding-top: 3%;
  padding-bottom: 1%;
  padding-left: 108px;
  padding-right: 108px;
}
.cover-img img {
  height: 500px;
}
#tagline h1 {
  color: black !important;
  font-family: clashDisplayMedium !important;
  font-size: 56px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 66px !important;
}
#tagline p {
  font-family: "Poppins" !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 30px !important;
  color: #63727e !important;
}

.btn-write {
  font-size: 15px;

  min-width: 150px;
  font-family: clashDisplayMedium !important;
  color: white !important;
  border-color: #00b18f !important;
  background-color: #00b18f;
  border-radius: 35px;
  padding-left: 35px !important;
  padding-right: 35px !important;
  padding-top: 23px !important;
  padding-bottom: 23px !important;
  transition: all 0.3s ease;
}
.btn-revise {
  font-size: 15px;
  min-width: 150px;
  font-family: clashDisplayMedium !important;
  color: #00b18f !important;
  border-color: #00b18f !important;
  background-color: white;
  border-width: 2px;
  border-radius: 35px;
  padding-left: 35px !important;
  padding-right: 35px !important;
  padding-top: 23px !important;
  padding-bottom: 23px !important;
  transition: all 0.3s ease;
}
.btn-revise:hover {
  transform: translate(5px, -5px);
  box-shadow: -5px 5px 0px #027962;
  background-color: #ebeef2;
}
.btn-write:hover {
  background-color: #027962;
  transform: translate(5px, -5px);
  box-shadow: -5px 5px 0px #43cfb3;
}
.modal-body {
  color: rgba(0, 0, 0, 0.8) !important;
}

@media only screen and (max-width: 768px) {
  .cover {
    padding-left: 12px;
    padding-right: 12px;
    margin-top: 20px !important;
  }
  .cover-img img {
    height: 380px;
  }
  #tagline h1 {
    font-size: 28px !important;
    text-align: center;
    line-height: 40px !important;
  }
  #tagline p {
    text-align: center;
    color: var(--Gray, #63727e) !important;
  }

  .tagline-buttons {
    flex-wrap: wrap !important;
    justify-content: center !important;
  }
}
</style>
