import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../views/Home.vue"; 
import About from "../views/About.vue"; 
import FAQ from "../views/FAQ.vue";
import ProductPage from "../views/ProductPage.vue";
// import Signup from "@/components/Signup.vue"; 
// import Login from "@/components/Login.vue";
const routes = [

  // { path: "/signup", component: Signup },
  // { path: "/login", component: Login },

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
    path: "/product/:id",
    name: "ProductPage",
    component: ProductPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
