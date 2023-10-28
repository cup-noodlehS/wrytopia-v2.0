<template>
  <transition name="navshow">
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      v-if="!navbarHidden"
    >
      <div class="container-fluid nav-pad">
        <a href="/#" class="navbar-brand"
          ><img src="images/nav-logo.svg" id="logo"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navs" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item delay1">
              <a
                href="/#services"
                class="nav-link hover-lift"
                aria-current="page"
                >SERVICES</a
              >
            </li>
            <li class="nav-item delay1">
              <a href="/#hit" class="nav-link hover-lift">HOW IT WORKS</a>
            </li>
            <li class="nav-item delay1" id="about-us">
              <router-link to="/about" class="nav-link hover-lift"
                >ABOUT US</router-link
              >
            </li>
            <li class="nav-item">
              <a
                class="btn btn-outline-light px-3 fade1"
                type="button"
                id="contact-us"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                >CONTACT US</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </transition>
  <Offset />
</template>

<script>
import Offset from "./navbar/Offset.vue";

export default {
  name: "Navbar",
  components: { Offset },
  data() {
    return {
      lastScrollPosition: 0,
      navbarHidden: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition > this.lastScrollPosition) {
        // Scrolling down
        this.navbarHidden = true;
      } else {
        // Scrolling up
        this.navbarHidden = false;
      }

      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/variables.scss";

#logo {
  width: 80%;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(102%);
  }
}
.navbar {
  height: 12vh !important;
  background-color: $white !important;

  .nav-pad {
    padding-left: 8%;
    padding-right: 8%;
  }
  .navs {
    justify-content: end;
    background-color: $white;
    border-radius: 15px;

    .nav-item {
      margin-right: 1rem;
      transition: all 0.2s ease;

      .nav-link {
        color: $black !important;
      }
    }
    #contact-us {
      font-family: clashDisplayMedium !important;
      border-radius: 30px;
      border-width: 2px !important;
      border-color: $accent !important;
      transition: all 0.6s ease !important;
      color: $accent !important;

      &:hover {
        color: $white !important;
        background-color: $accent;
        border-color: $accent !important;
      }
    }
  }
}

.navshow-enter-active {
  animation-delay: 3s;

  animation: slideDown 1.5s;
}
.navshow-leave-active {
  animation-delay: 2s;
  animation: slideDown 1s reverse;
}

@media #{$tablet} {
  #logo {
    width: 150px !important;
    margin-left: 20px;
  }
  .nav-pad {
    padding-left: 10px;
    padding-right: 10px;
  }
  .navs {
    padding: 20px;
  }
  .navbar {
    height: 12vh !important;
  }
}
// this is noting
</style>
