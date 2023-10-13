import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./views/LandingPage.vue";
import AboutPage from "./views/AboutPage.vue";
import Page404 from "./views/Page404.vue";
import TermsAndConditionsPage from "./views/TermsAndConditionsPage.vue";
import PrivacyPolicyPage from "./views/PrivacyPolicyPage.vue";
import RefundPolicyPage from "./views/RefundPolicyPage.vue";

const routes = [
  {
    path: "/",
    component: LandingPage,
    name: 'landing-page',
    meta:{
      title: 'Wytopia'
    }
  },
  {
    path: "/about",
    component: AboutPage,
    name: 'about-us',
    meta: {
      title: 'Wytopia | About us'
    }
  },
  {
    path: "/terms-and-conditions",
    component: TermsAndConditionsPage,
    name: 'terms-and-conditions',
    meta: {
      title: 'Wrytopia | Terms and Conditions'
    }
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicyPage,
    meta: {
      title: 'Wrytopia | Privacy Policy'
    }
  },
  {
    path: "/refund-policy",
    component: RefundPolicyPage,
    meta: {
      title: 'Wrytopia | Refund Policy'
    }
  },
  {
    path: "/:catchAll(.*)",
    component: Page404,
    meta: {
      title: 'Page Not Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Wrytopia';
  next();
})

export default router;
