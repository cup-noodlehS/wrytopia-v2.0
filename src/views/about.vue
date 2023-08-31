<template>
  <header><Navbar /> about shizz</header>
  <footer class="container-fluid d-flex flex-wrap">
    <Footer />
  </footer>
</template>
<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
