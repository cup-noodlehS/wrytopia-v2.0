<template>
  <!-- <Navbar /> -->
  <header>
    <Cover />
  </header>
  <main>
    <Overview />
    <Features />
    <Services />
    <Hit />
    <Map />
  </main>
  <!-- <Footer /> -->
</template>

<script>
// import Navbar from "../components/navbar.vue";
// import Footer from "../components/footer.vue";
import Cover from "../components/home/cover.vue";
import Overview from "../components/home/overview.vue";
import Features from "../components/home/features.vue";
import Services from "../components/home/services.vue";
import Hit from "../components/home/hit.vue";
import Map from "../components/home/map.vue";

export default {
  components: {
    // Navbar,
    // Footer,
    Cover,
    Map,
    Overview,
    Features,
    Services,
    Hit,
  },
};
</script>
