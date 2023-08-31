<template>
  <div class="services mb-5 pt-3" id="services">
    <center><h1 id="services-title">SERVICES</h1></center>
    <center>
      <h1 id="services-sub">Choose a contract that suits you</h1>
    </center>
    <div class="container-fluid row my-3">
      <div
        class="col-md-6 col-12 my-4 text-center service-option"
        id="creation-btn"
        @click="showCreation()"
        :class="{ 'service-active': left }"
      >
        Outline Creation
      </div>
      <div
        class="col-md-6 col-12 my-4 text-center service-option"
        id="revision-btn"
        @click="showRevision()"
        :class="{ 'service-active': right }"
      >
        Outline Revision
      </div>
    </div>
    <div
      class="row service-card-container outline-creation container-fluid mx-0 justify-content-center"
      :class="{ 'show slide-right1': left, 'not-show slide-left1': right }"
    >
      <div class="col-lg-6 col-12" id="service-card-left">
        <div
          id="card-left-content"
          class="p-5 d-flex service-card flex-column justify-content-between align-items-start mb-3"
        >
          <h1 class="mycard-title">Contract C</h1>
          <p class="mycard-description mb-3">
            A one-time fee and service provided by the third-party agent to the
            writer.
          </p>
          <div class="mycard-list mb-3">
            <div class="d-flex">
              <img
                src="images/services/checkGreen.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                creates your story outline in a single session
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkGreen.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                one-on-one meeting with the team to curate your perfect outline
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkGreen.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                budget-friendly price range based on your story needs
              </p>
            </div>
            <div class="d-flex">
              <img src="images/services/exRed.png" class="ex me-2" alt="" />
              <p class="mycard-list-text">
                guarantee for outline’s success in contract securing
              </p>
            </div>
          </div>
          <a href="#" class="btn btn-success btn-write me-2 mb-2"
            >GET STARTED</a
          >
        </div>
      </div>
      <div class="col-lg-6 col-12" id="service-card-right">
        <div
          id="card-right-content"
          class="service-card p-5 d-flex flex-column justify-content-between align-items-start mb-3"
        >
          <h1 class="mycard-title">Contract CE</h1>
          <p class="mycard-description mb-3">
            An exclusive service until the story of the writer gets accepted in
            the online writing platform.
          </p>
          <div class="mycard-list mb-3">
            <div class="d-flex">
              <img
                src="images/services/checkWhite.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                unlimited outline revision for your stories
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkWhite.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                one-on-one meeting with the team to curate your perfect outline
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkWhite.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                more premium pricing tailored to your story’s requirements
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkWhite.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                guarantee for outline’s success in contract securing
              </p>
            </div>
          </div>
          <a href="#" class="btn btn-success btn-revise me-2 mb-2"
            >GET STARTED</a
          >
        </div>
      </div>
    </div>
    <div
      class="row service-card-container outline-revision container-fluid mx-0 justify-content-center"
      :class="{ 'not-show slide-right1': left, 'show slide-left1': right }"
    >
      <div class="col-lg-6 col-12" id="service-card-left">
        <div
          id="card-left-content"
          class="p-5 d-flex service-card flex-column justify-content-between align-items-start mb-3"
        >
          <h1 class="mycard-title">Contract R</h1>
          <p class="mycard-description mb-3">
            A one-time fee and service provided by the third-party agent to the
            writer.
          </p>
          <div class="mycard-list mb-3">
            <div class="d-flex">
              <img
                src="images/services/checkGreen.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                creates your story outline in a single session
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkGreen.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                one-on-one meeting with the team to curate your perfect outline
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkGreen.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                budget-friendly price range based on your story needs
              </p>
            </div>
            <div class="d-flex">
              <img src="images/services/exRed.png" class="ex me-2" alt="" />
              <p class="mycard-list-text">
                guarantee for outline’s success in contract securing
              </p>
            </div>
          </div>
          <a href="#" class="btn btn-success btn-write me-2 mb-2"
            >GET STARTED</a
          >
        </div>
      </div>
      <div class="col-lg-6 col-12" id="service-card-right">
        <div
          id="card-right-content"
          class="service-card p-5 d-flex flex-column justify-content-between align-items-start mb-3"
        >
          <h1 class="mycard-title">Contract RE</h1>
          <p class="mycard-description mb-3">
            An exclusive service until the story of the writer gets accepted in
            the online writing platform.
          </p>
          <div class="mycard-list mb-3">
            <div class="d-flex">
              <img
                src="images/services/checkWhite.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                unlimited outline revision for your stories
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkWhite.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                one-on-one meeting with the team to curate your perfect outline
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkWhite.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                more premium pricing tailored to your story’s requirements
              </p>
            </div>
            <div class="d-flex">
              <img
                src="images/services/checkWhite.png"
                class="check me-2"
                alt=""
              />
              <p class="mycard-list-text">
                guarantee for outline’s success in contract securing
              </p>
            </div>
          </div>
          <a href="#" class="btn btn-success btn-revise me-2 mb-2"
            >GET STARTED</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const left = ref(true);
const right = ref(false);
function showCreation() {
  left.value = true;
  right.value = false;
}
function showRevision() {
  left.value = false;
  right.value = true;
}
</script>
<style scoped>
.show {
  display: flex !important;
}
.not-show {
  display: none !important;
}
</style>
