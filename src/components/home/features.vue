<template>
  <div
    class="d-flex flex-wrap features justify-content-center container-fluid align-items-center mb-5"
    id="features"
    :class="{ show: slide }"
  >
    <div class="features-text delay4" ref="myElement">
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
      <img
        src="images/features.svg"
        ref="yourElement"
        alt=""
        id="features-img"
        class="delay4"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      observer: null,
      slide: true,
    };
  },
  // mounted() {
  //   this.observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         this.$refs.myElement.classList.add("slide-right1");
  //         this.$refs.yourElement.classList.add("slide-left1");
  //         this.slide = true;
  //       }
  //     });
  //   });
  //   this.observer.observe(this.$refs.myElement);
  // },
};
</script>
<style scoped>
.features {
  padding: 108px;
  opacity: 0;
}

#features-header {
  color: var(--Gray, #63727e) !important;
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
.idk {
  font-family: clashDisplayMedium !important;
  color: #00b18f;
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
.show {
  opacity: 1;
}
@media only screen and (max-width: 768px) {
  .features {
    text-align: center;
    padding: 15px;
  }
  #features-header {
    font-size: 16px !important;
    line-height: 20px !important;
  }
  #features-line,
  .idk {
    font-size: 25px !important;
    line-height: 30px !important;
  }
  #features-content {
    font-size: 14px !important;
    line-height: 24px !important;
  }
}
@media only screen and (max-width: 1200px) {
  .features-text {
    width: 95% !important;
  }
}
</style>
