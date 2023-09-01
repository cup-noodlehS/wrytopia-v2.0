<template>
  <div
    class="d-flex flex-wrap features justify-content-center container-fluid align-items-center"
  >
    <div class="features-text">
      <p id="features-header">FEATURES</p>
      <h1 id="features-line" class="mb-3">
        Your outlines, <span class="idk">perfected</span>
      </h1>
      <p id="features-content">
        With our strategies, your story gets accepted when you apply to
        different online writing platforms. Join hand with Wrytopia to transform
        your writing aspirations into a successful writing journey.
      </p>
    </div>
    <div>
      <img src="images/features.svg" alt="" id="features-img" />
    </div>
  </div>
</template>
<style scoped>
.features {
  padding: 108px;
}

#features-header {
  font-family: clashDisplayMedium !important;
  font-size: 28px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: 20px !important; /* 71.429% */
  letter-spacing: 2.8px !important;
}

#features-line {
  color: black !important;
  font-family: clashDisplayMedium !important;
  font-size: 56px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 66px !important;
}

#features-content {
  color: #63727e !important;
  font-family: "Poppins" !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: 30px !important;
}
.features-text {
  width: 400px;
}
#features-img {
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .features {
    text-align: center;
    padding: 20px;
  }
}
@media only screen and (max-width: 1200px) {
  .features-text {
    width: 95% !important;
  }
}
</style>
