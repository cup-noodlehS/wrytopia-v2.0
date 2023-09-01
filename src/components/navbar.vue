<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary slide-down1">
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
<script></script>
