import { createRouter, createWebHashHistory } from "vue-router";
import LandingView from "../views/sections/LandingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/pages/AboutPage.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import("../views/pages/ServicesPage.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () =>
      import("../views/pages/PricingPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/pages/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
