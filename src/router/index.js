import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../views/Home.vue"; 
import About from "../views/About.vue"; 
import FAQ from "../views/FAQ.vue";
import ProDetailsPage from "../views/ProDetailsPage.vue";
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
  {
    path: "/product-details",
    name: "ProDetailsPage",
    component: ProDetailsPage,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
