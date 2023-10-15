<template>
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
</template>

<script>
import Cover from "../components/home/Cover.vue";
import Overview from "../components/home/Overview.vue";
import Features from "../components/home/Features.vue";
import Services from "../components/home/Services.vue";
import Hit from "../components/home/Hit.vue";
import Map from "../components/home/Map.vue";

export default {
  name: "LandingPage",
  components: {
    Cover,
    Map,
    Overview,
    Features,
    Services,
    Hit,
  },
};
</script>
