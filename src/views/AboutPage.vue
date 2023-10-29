<template>
  <main>
    <div class="d-flex flex-column align-items-center header">
      <!-- <div class="d-flex flex-column align-items-center small-title">
        <h4 class="text-center m-0">About us</h4>
        <hr class="m-0" />
      </div> -->
      <div class="title d-flex justify-content-center flex-wrap">
        <img src="images/aboutpage/dick.svg" class="dick dick-left" alt="" />
        <h1 class="title-text me-3 mb-0" style="color: black !important">
          About
        </h1>
        <div class="d-flex">
          <h1 class="title-text">Wrytopia</h1>
          <svg
            class="circle"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#00b18f" />
          </svg>
        </div>
      </div>
      <div class="subtitle text-start">
        <h5>
          We work with you to craft your vision, from concept to
          <span>{{ typewriteWord }}</span
          ><span class="blinking-element">|</span>
        </h5>
        <p class="text-start">
          At Wrytopia, we're not just a startup; we're your launchpad to take
          your stories to new heights. Our mission is to empower authors by
          providing a writing-assistant platform that guides you with where you
          should be headed to with your stories.
        </p>
      </div>
    </div>
    <div class="body container">
      <div class="row">
        <div class="col-md-4 d-flex flex-column p-3 pt-4 section first">
          <img
            src="images/aboutpage/wingleft.svg"
            alt=""
            class="wing wing-left"
          />
          <div class="d-flex justify-content-between">
            <h5>What <span class="accent">We Offer</span></h5>
            <img
              src="images/aboutpage/accentCircle.svg"
              alt=""
              class="circle"
            />
          </div>
          <div class="d-flex align-items-center">
            <span class="dot"></span><span class="line"></span>
          </div>
          <p>
            Wrytopia is your dedicated companion throughout your creative
            journey. We specialize in assisting you in curating meticulously
            structured outlines and refining your existing drafts. Our
            user-friendly contracts are designed to cater to your unique needs.
          </p>
        </div>
        <div class="col-md-4 d-flex flex-column p-3 pt-4 section second">
          <div class="d-flex justify-content-between">
            <h5>Our <span class="accent">Vision</span></h5>
            <img
              src="images/aboutpage/accentCircle.svg"
              alt=""
              class="circle"
            />
          </div>
          <div class="d-flex align-items-center">
            <span class="dot"></span><span class="line"></span>
          </div>
          <p>
            Wrytopia is your steadfast partner in creating compelling outlines
            that captivate your target readers and revising outlines that will
            effectively suit your goals. Creating a story outline is the first
            step in kickstarting your writing journey, however, creating one
            could be quite challenging given that you have big ideas.
          </p>
        </div>
        <div class="col-md-4 d-flex flex-column p-3 pt-4 section third">
          <div class="d-flex justify-content-between">
            <h5>Our <span class="accent">Team</span></h5>
            <div>
              <img
                src="images/aboutpage/accentCircle.svg"
                alt=""
                class="circle"
              />
              <img
                src="images/aboutpage/wingright.svg"
                alt=""
                class="wing wing-right"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="dot"></span><span class="line"></span>
          </div>
          <p>
            Behind Wrytopia is a team of proficient and efficient writers who
            are dedicated to understanding your vision and helping you bring
            your stories to life. Wrytopia is beside you in every step of the
            way, through its user-friendly contracts catered to your needs. 
          </p>
        </div>
      </div>
    </div>

    <div class="footer py-5 px-3">
      <h5 class="text-center">
        Wrytopia is not just a platform. It is a community of storytellers
      </h5>
      <h5 class="text-center">
        <span class="accent"
          >Join us to embark on a journey that will unlock your storytelling
          potential!</span
        >
      </h5>
    </div>
  </main>
</template>
<script>
export default {
  name: "AboutPage",
  data() {
    return {
      typewrite: ["completion", "perfection", "finalization", "production"],
      typewriteIndex: 0,
      typewriteWord: "",
    };
  },
  mounted() {
    this.typewriteEffect();
  },
  methods: {
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async typewriteEffect() {
      while (true) {
        let word = this.typewrite[this.typewriteIndex];
        let i = 0;
        while (this.typewriteWord !== word) {
          this.typewriteWord += word[i];
          i++;
          await this.sleep(100);
        }
        await this.sleep(3000);
        while (this.typewriteWord !== "") {
          this.typewriteWord = this.typewriteWord.slice(0, -1);
          await this.sleep(100);
        }
        this.typewriteIndex = (this.typewriteIndex + 1) % this.typewrite.length;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/variables.scss";

main {
  .header {
    background: $light-accent;
    padding-top: 110px;
    overflow-x: hidden;
    max-width: 100%;

    // .small-title {
    //   & * {
    //     color: $black !important;
    //   }

    //   hr {
    //     width: 80%;
    //     opacity: 1;
    //     background: $black;
    //     height: 3px;
    //   }
    // }

    .title {
      .title-text {
        font-size: 7rem !important;
        font-family: clashDisplayMedium !important;

        @media #{$tablet} {
          font-size: 3rem !important;
        }
      }
      .circle {
        @media #{$tablet} {
          width: 20px;
        }
      }
      .dick {
        position: absolute;

        &-left {
          transform: translate(-550%, 100%);
        }
      }
    }

    .subtitle {
      width: 50%;
      padding: 20px;

      @media #{$tablet} {
        width: 100%;
      }

      h5 {
        font-family: "Poppins" !important;
        color: $black !important;

        span {
          color: $accent;
          font-size: inherit;
        }
      }

      p {
        color: $gray !important;
        font-family: "Poppins" !important;
        font-weight: 400 !important;
      }
    }
  }

  .body {
    width: 100vw;

    .section {
      border-top: solid 3px $black;
      background: $white;

      & + .second {
        background-color: $light-accent;
        border-top: none;
        border-left: solid 3px $black;
        border-right: solid 3px $black;
        border-bottom: solid 3px $black;
        border-radius: 0 0 20px 20px;

        @media #{$tablet} {
          border-top: solid 3px $black;
          border-radius: 0;
          border-bottom: none;
          border-left: none;
          border-right: none;
        }
      }

      h5 {
        color: $black !important;
        font-family: "Poppins" !important;
      }
      .circle {
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }

      p {
        color: $black !important;
        font-family: "Poppins" !important;
        font-weight: 400 !important;
      }

      .dot {
        width: 10px;
        height: 10px;
        background-color: $black;
        border-radius: 50%;
        display: inline-block;
      }
      .line {
        width: 70%;
        height: 3px;
        background-color: $black;
        display: inline-block;
        margin-left: 10px;
      }
    }

    .wing {
      position: absolute;
      width: 150px;

      &-left {
        transform: translate(-10%, -155%);
      }
      &-right {
        transform: translate(-90%, -155%);
      }

      @media #{$tablet} {
        display: none;
      }
    }
  }

  .footer {
    background: $white;
    h5 {
      color: $black !important;
    }
  }
}

.accent {
  font-size: inherit !important;
  font-family: inherit !important;
  color: $accent !important;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}

.blinking-element {
  animation: blink 1s infinite;
}
</style>
