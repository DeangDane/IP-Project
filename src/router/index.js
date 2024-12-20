import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/AboutView.vue";
import Home from "../views/HomeView.vue"; // Replace with the default component to load
import BestSellersView from "@/views/BestSellersView.vue";
import FaqsView from "@/views/FaqsView.vue";
import NewArrivalsView from "@/views/NewArrivalsView.vue";
import ProDetailsView from "@/views/ProDetailsView.vue";
import PromotionsView from "@/views/PromotionsView.vue";
import Productcard from "@/views/CartView.vue";

const routes = [
  { path: "/", name: "Home", component: Home, },
  // { path: "/", name: "AllProduct", component: AllProduct, },
  { path: "/bestSeller", name: "BestSeller", component: BestSellersView },
  { path: "/promotion", name: "Promotion", component: PromotionsView },
  { path: "/newArrival", name: "NewArrival", component: NewArrivalsView },
  { path: "/about", name: "About", component: About },
  { path: "/faq", name: "Faq", component: FaqsView },
  { path: "/proDetail", name: "ProDetail", component: ProDetailsView },
  { path: "/cart", name: "Cart", component: Productcard },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Correct property name
});

export default router;
