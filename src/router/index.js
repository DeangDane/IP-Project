import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; 
import About from "../views/About.vue"; 
import FAQ from "../views/FAQ.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: About,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Correct property name
});

export default router;
