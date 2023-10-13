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
import Cover from "../components/home/cover.vue";
import Overview from "../components/home/overview.vue";
import Features from "../components/home/features.vue";
import Services from "../components/home/services.vue";
import Hit from "../components/home/hit.vue";
import Map from "../components/home/map.vue";

export default {
  name: 'LandingPage',
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
