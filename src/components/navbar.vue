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
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header align-items-start">
      <!-- <h5 class="offcanvas-title" id="offcanvasRightLabel">Contacts</h5> -->
      <img
        src="images/wrytopia.svg"
        class="offcanvas-title m-3"
        id="offcanvasRightLabel"
        alt=""
      />
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-flex flex-column px-3">
        <div class="conts">
          <a
            href="https://www.facebook.com/wrytopia"
            target="_blank"
            class="link-underline link-underline-opacity-0"
            ><span class="me-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  transform="translate(0.85495 0.5)"
                  fill="white"
                />
                <rect
                  x="0.85495"
                  y="0.5"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#F2F1FA"
                />
                <path
                  d="M13.8309 18.5V13.0262H15.7606L16.0496 10.893H13.8308V9.53102C13.8308 8.9134 14.0109 8.49252 14.9412 8.49252L16.1277 8.49199V6.58405C15.9225 6.5581 15.2181 6.5 14.3988 6.5C12.6881 6.5 11.517 7.49412 11.517 9.31982V10.893H9.58221V13.0262H11.517V18.4999L13.8309 18.5Z"
                  fill="#63727e"
                /></svg
            ></span>
            Facebook</a
          >
        </div>
        <div class="conts">
          <a
            href="mailto: team.wrytopia@gmail.com"
            target="_blank"
            class="link-underline link-underline-opacity-0"
          >
            <span class="me-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M19.1883 6.44971V14.783C19.1883 15.3356 18.9688 15.8655 18.5781 16.2562C18.1874 16.6469 17.6575 16.8664 17.1049 16.8664H4.60494C4.05241 16.8664 3.5225 16.6469 3.1318 16.2562C2.7411 15.8655 2.52161 15.3356 2.52161 14.783V6.44971"
                  stroke="#63727e"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.1883 6.44954C19.1883 5.89701 18.9688 5.36711 18.5781 4.97641C18.1874 4.5857 17.6575 4.36621 17.1049 4.36621H4.60494C4.05241 4.36621 3.5225 4.5857 3.1318 4.97641C2.7411 5.36711 2.52161 5.89701 2.52161 6.44954L9.75077 10.9634C10.0819 11.1704 10.4645 11.2801 10.8549 11.2801C11.2454 11.2801 11.628 11.1704 11.9591 10.9634L19.1883 6.44954Z"
                  stroke="#63727e"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
            team.wrytopia@gmail.com
          </a>
        </div>
      </div>
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
.navshow-enter-active {
  animation-delay: 3s;

  animation: slideDown 1.5s;
}
.navshow-leave-active {
  animation-delay: 2s;
  animation: slideDown 1s reverse;
}
.conts {
  margin-bottom: 1rem;
}
.conts a {
  color: rgba(0, 0, 0, 0.5) !important;
}

@media only screen and (max-width: 768px) {
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
}
@media only screen and (max-width: 1200px) {
  /* #about-us {
    margin-right: 60px;
  } */
}
</style>
