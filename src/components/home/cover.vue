<template>
  <div class="cover row m-0 overflow-hidden">
    <div
      class="cover-tagline mb-1 pb-3 col-12 col-lg-6 d-flex justify-content-center align-items-center slide-right1 delay1"
    >
      <div id="tagline" class="d-flex flex-column justify-content-start">
        <h1 class="mb-3">From Draft to Confidence</h1>
        <p class="mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          error libero velit nesciunt, quibusdam fugit
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
      <div id="animation1 container1" class="animation-cover"></div>
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
<script setup>
var animation = bodymovin.loadAnimation({
  container: document.getElementById("animation1 container1"),
  path: "./images/animations/Hero.lottie.json",
  render: "svg",
  loop: true,
  autoplay: true,
  name: "cover animation",
});
</script>
