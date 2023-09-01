<template>
  <div class="cover row m-0 overflow-hidden">
    <div
      class="cover-tagline mb-1 pb-3 col-12 col-lg-6 d-flex justify-content-center align-items-center slide-right1 delay1"
    >
      <div id="tagline" class="d-flex flex-column justify-content-start">
        <h1 class="mb-3">Empowering Authors, Framing Stories</h1>
        <p class="mb-3">
          Wrytopia is a reliable third-party agent committed to assisting global
          English writers by providing high-quality writing services that pave
          the way for your writing carer.
        </p>
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
      <!-- <div id="animation1 container1" class="animation-cover"></div> -->
      <div ref="lottieContainer" class="animation-cover"></div>
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
          <h1 class="modal-title fs-5" id="exampleModalLabel">WRITE</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, quae. Aperiam laboriosam nemo id, sint ratione
          corporis perferendis magnam. Velit quia sed possimus dolore. Iste
          sequi quas veniam suscipit odit!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" id="contact-us">
            Gaurr
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
          <h1 class="modal-title fs-5" id="exampleModalLabel">Revise</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, quae. Aperiam laboriosam nemo id, sint ratione
          corporis perferendis magnam. Velit quia sed possimus dolore. Iste
          sequi quas veniam suscipit odit!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" id="contact-us">
            Gaurr
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
  mounted() {
    this.lottieInstance = Lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      animationData: animationData,
      loop: true,
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
