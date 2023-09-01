<template>
  <div class="container-fluid hit pt-3" id="hit" ref="hit">
    <center>
      <h1 id="hit-title" class="slide-down1 delay4">HOW IT WORKS</h1>
    </center>
    <center>
      <h1 id="hit-title2">
        Your path to <span class="idk">perfect outlines</span>
      </h1>
    </center>
    <center>
      <p id="hit-p">
        By following the step-by-step guide below, you will unlock global
        opportunities for your story with Wrytopia’s expert writing services.
      </p>
    </center>
    <div class="d-flex flex-wrap justify-content-center">
      <div class="card text-center m-3" style="width: 18rem">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <img src="images/hitImg1.svg" class="m-3" alt="" />
            <h5 class="card-title">Step 1</h5>
            <p class="card-text mb-3">
              After scheduling an appointment with us, the sales team will
              contact you to explain our contract types where you can ask
              queries and concerns.
            </p>
          </div>
        </div>
      </div>
      <div class="card text-center m-3" style="width: 18rem">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <img src="images/hitImg2.svg" class="m-3" alt="" />
            <h5 class="card-title">Step 2</h5>
            <p class="card-text mb-3">
              Reviewing and signing of contract via DocuSign platform
            </p>
          </div>
        </div>
      </div>
      <div class="card text-center m-3" style="width: 18rem">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <img src="images/hitImg3.svg" class="m-3" alt="" />
            <h5 class="card-title">Step 3</h5>
            <p class="card-text mb-3">
              Content team will collaborate with the writer's needs to create
              the outline. Then, the writer will finally submit to the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hit {
  padding-left: 50px;
  padding-right: 50px;
}
#hit-title {
  font-family: clashDisplayMedium !important;
  color: #63727e !important;
  font-size: 28px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: 20px !important; /* 71.429% */
  letter-spacing: 2.8px !important;
}
#hit-title2 {
  color: black !important;
  font-family: clashDisplayMedium !important;
  font-size: 56px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 66px !important;
}
#hit-p {
  color: #63727e !important;
  width: 50%;
  font-family: "Poppins" !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 30px !important;
}
.card {
  border-radius: 16px !important;
  border-color: #63727e;
  transition: all 0.3s ease;
  min-height: 390px !important;
}
.card-title {
  color: black !important;
  font-size: 28px !important;
  font-style: normal !important;
  font-weight: bolder !important;
  line-height: 20px !important;
  margin: 1rem;
}
.card-text {
  color: #63727e !important;
  font-family: "Poppins" !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 30px !important;
}

.card:hover {
  background-color: #d0f4ec;
  transform: translate(5px, -5px);
  box-shadow: -5px 5px 0px #00b18f;
}
@media only screen and (max-width: 768px) {
  .hit {
    padding: 20px;
  }
  #hit-p {
    width: 100%;
  }
}
</style>
