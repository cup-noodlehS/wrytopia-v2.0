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
    <div ref="yourElement">
      <table id="features-img" class="delay4">
        <tr>
          <td @mouseover="featureHover(0)" @mouseleave="featureOut(0)">
            <center>
              <Transition name="feature-show">
                <img
                  src="images/features/feature1.svg"
                  alt=""
                  v-if="showFeature[0]"
                />
                <p v-else>
                  At Wrytopia, we understand authors' needs intimately. Our
                  skilled team crafts high-quality content tailored to your
                  unique voice and style. We have types of contract depending on
                  your needs.
                </p>
              </Transition>
            </center>
          </td>
          <td @mouseover="featureHover(1)" @mouseleave="featureOut(1)">
            <center>
              <Transition name="feature-show">
                <img
                  src="images/features/feature2.svg"
                  v-if="showFeature[1]"
                  alt=""
                />
                <p v-else>
                  Whether you're refining an existing outline or creating one
                  from scratch, Wrytopia's experts curate outlines that lay the
                  foundation for a captivating story. From settings, characters,
                  plot, and planning the reference chapters of the story.
                </p>
              </Transition>
            </center>
          </td>
        </tr>
        <tr>
          <td @mouseover="featureHover(2)" @mouseleave="featureOut(2)">
            <center>
              <Transition name="feature-show">
                <img
                  src="images/features/feature3.svg"
                  v-if="showFeature[2]"
                  alt=""
                />
                <p v-else>
                  At Wrytopia, our commitment to ethics and integrity ensures
                  that we craft original story outlines without relying on AI
                  tools.
                </p>
              </Transition>
            </center>
          </td>
          <td @mouseover="featureHover(3)" @mouseleave="featureOut(3)">
            <center>
              <Transition name="feature-show">
                <img
                  src="images/features/feature4.svg"
                  v-if="showFeature[3]"
                  alt=""
                />
                <p v-else>
                  Our top priority is delivering prompt and efficient service to
                  finalize your story outline.
                </p>
              </Transition>
            </center>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      observer: null,
      slide: true,
      showFeature: [true, true, true, true],
    };
  },
  methods: {
    featureHover(i) {
      this.showFeature[i] = false;
    },
    featureOut(i) {
      this.showFeature[i] = true;
    },
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
td {
  width: 340px;
  height: 250px;
}
td p {
  color: #63727e !important;
  font-family: "Poppins" !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: 30px !important;
}
td:hover {
  cursor: pointer;
}
td img {
  width: 70%;
}
#features-img {
  border-collapse: collapse; /* This property collapses the table borders */
}

#features-img td {
  border: 1px solid #000; /* Add a 1px solid border to each cell */
  padding: 10px; /* Add some padding for spacing */
}

#features-img tr:first-child td {
  border-top: none; /* Remove the top border for the first row */
}

#features-img tr:last-child td {
  border-bottom: none; /* Remove the bottom border for the last row */
}

#features-img tr td:first-child {
  border-left: none; /* Remove the left border for the first column */
}

#features-img tr td:last-child {
  border-right: none; /* Remove the right border for the last column */
}
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

.feature-show-enter-active {
  animation: fadeKey 1s;
}
.feature-show-leave-active {
  display: none;
  animation: fadeKey 3s reverse;
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
  #features-content,
  td p {
    font-size: 14px !important;
    line-height: 24px !important;
  }
}
@media only screen and (max-width: 1200px) {
  .features-text {
    width: 95% !important;
  }
}
/* this is nothing */
</style>
