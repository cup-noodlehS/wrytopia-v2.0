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
          <a
            href="/contract/c"
            class="btn btn-success btn-getstarted-left me-2 mb-2"
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
          <a
            href="/contract/ce"
            class="btn btn-success btn-getstarted-right me-2 mb-2"
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
          <a
            href="/contract/r"
            class="btn btn-success btn-getstarted-left me-2 mb-2"
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
          <a
            href="/contract/re"
            class="btn btn-success btn-getstarted-right me-2 mb-2"
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
#services-title {
  font-family: clashDisplayMedium !important;
  color: #63727e !important;
  font-size: 28px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: 20px !important; /* 71.429% */
  letter-spacing: 2.8px !important;
}
#services-sub {
  color: black !important;
  font-family: clashDisplayMedium !important;
  font-size: 56px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 66px !important;
}
.service-card-container {
  width: 100%;
  min-height: 80vh;
}

#service-card-left {
  min-height: 550px;
}

#service-card-right {
  min-height: 550px;
}

#card-left-content {
  border: solid 1px #63727e;
  border-radius: 16px;
  min-height: 615px;
}
#card-right-content {
  background-color: #00b18f;
  border-radius: 16px;
  min-height: 615px;
}

#card-left-content .mycard-title {
  color: #000 !important;
  font-family: clashDisplayMedium !important;
  font-size: 44px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 50px !important; /* 113.636% */
}
#card-right-content .mycard-title {
  color: white !important;
  font-family: clashDisplayMedium !important;
  font-size: 44px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 50px !important; /* 113.636% */
}

#card-left-content .mycard-description {
  color: #63727e !important;
  font-family: "Poppins" !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 30px !important; /* 166.667% */
}
#card-right-content .mycard-description {
  color: white !important;
  font-family: "Poppins" !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 30px !important; /* 166.667% */
}

#card-left-content .mycard-list-text {
  color: #000 !important;
  /* Body 2 */
  font-family: "Poppins" !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: normal !important;
  display: inline;
}
#card-right-content .mycard-list-text {
  color: white !important;
  /* Body 2 */
  font-family: "Poppins" !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: normal !important;
  display: inline;
}
.check {
  width: 26px;
  height: 26px;
}
.ex {
  width: 26px;
  height: 26px;
}
.service-option {
  color: #63727e !important;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Poppins" !important;
  font-size: 28px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 20px !important; /* 71.429% */
  transition: all 0.8s ease;
}
.service-option:hover {
  cursor: pointer;
}

.service-active {
  color: #00b18f !important;
  text-decoration: underline !important;
  text-underline-offset: 10px;
  text-decoration-thickness: 5px !important;
}
.outline-revision {
  transition: all 0.8s ease;
  display: none;
}
.online-creation {
  transition: all 0.8s ease;
}
.btn-getstarted-left {
  font-size: 17px;

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
.btn-getstarted-left:hover {
  background-color: #027962;
  transform: translate(5px, -5px);
  box-shadow: -5px 5px 0px #43cfb3;
}

.btn-getstarted-right {
  font-size: 17px;
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
.btn-getstarted-right:hover {
  transform: translate(5px, -5px);
  box-shadow: -5px 5px 0px #027962;
  background-color: #ebeef2;
}
@media only screen and (max-width: 768px) {
  .services {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .service-card {
    padding: 20px !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .service-card-container {
    justify-content: center !important;
  }
}
</style>
