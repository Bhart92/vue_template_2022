import { createRouter, createWebHashHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";

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
      import("../views/AboutPage.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import("../views/ServicesPage.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () =>
      import("../views/PricingPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
