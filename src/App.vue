<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import { inject } from '@vercel/analytics';

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

inject();

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<!-- this is nothing -->
