import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      children: [{ path: "" }],
    },
    {
      path: "/about",
      component: About,
      children: [{ path: "" }],
    },
  ],
});

export default router;
