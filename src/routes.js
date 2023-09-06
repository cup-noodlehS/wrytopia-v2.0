import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";
import NotFound from "./views/notfound.vue";
import Terms from "./views/terms.vue";
import Privacy from "./views/privacyPolicy.vue";
import Refund from "./views/refundPolicy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/terms-and-conditions",
      component: Terms,
    },
    {
      path: "/privacy-policy",
      component: Privacy,
    },
    {
      path: "/refund-policy",
      component: Refund,
    },
  ],
});

export default router;
