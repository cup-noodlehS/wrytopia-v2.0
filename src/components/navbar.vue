<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary slide-down1 fixed-top"
    :class="{ hidden: navbarHidden }"
  >
    <div class="container-fluid nav-pad">
      <router-link to="/" class="navbar-brand"
        ><img src="images/nav-logo.svg" id="logo"
      /></router-link>
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
            <a href="/#services" class="nav-link hover-lift" aria-current="page"
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
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Contacts</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      quibusdam quaerat, minima in deleniti atque obcaecati eos itaque eaque,
      dolore, officiis impedit nemo beatae ullam vitae architecto fugiat modi
      adipisci!
    </div>
  </div>
</template>
<script>
export default {
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
<style scoped>
.hidden {
  display: none;
}
#logo {
  transition: all 0.4s ease;
}
#logo:hover {
  transform: scale(102%);
}
.navs {
  justify-content: end;
  background-color: white;
  border-radius: 15px;
}
.navbar-nav {
  /* justify-content: space-between; */
}
.navbar {
  height: 16.5vh !important;
  background-color: white !important;
}
.nav-pad {
  padding-left: 8%;
  padding-right: 8%;
}
.nav-item {
  margin-right: 1rem;
  transition: all 0.2s ease;
}

.nav-link {
  color: black !important;
}
#about-us {
  /* margin-right: 200px; */
}
#contact-us {
  font-family: clashDisplayMedium !important;
  border-radius: 30px;
  border-width: 2px !important;
  border-color: #00b18f !important;
  transition: all 0.6s ease !important;
  color: #00b18f !important;
}
#contact-us:hover {
  color: white !important;
  background-color: #00b18f;
  border-color: #00b18f !important;
}

@media only screen and (max-width: 768px) {
  #logo {
    width: 250px !important;
  }
  .nav-pad {
    padding-left: 10px;
    padding-right: 10px;
  }
  .navs {
    padding: 20px;
  }
}
@media only screen and (max-width: 1200px) {
  /* #about-us {
    margin-right: 60px;
  } */
}
</style>
