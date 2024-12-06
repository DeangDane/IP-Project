import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/AboutView.vue";
import Home from "../views/HomeView.vue"; // Replace with the default component to load
import BestSellersView from "@/views/BestSellersView.vue";
import FaqsView from "@/views/FaqsView.vue";
import NewArrivalsView from "@/views/NewArrivalsView.vue";
import ProDetailsView from "@/views/ProDetailsView.vue";
import PromotionsView from "@/views/PromotionsView.vue";

const routes = [
  { path: "/", name: "Home", component: Home, },
  { path: "/bestSeller", component: BestSellersView },
  { path: "/promotion", component: PromotionsView },
  { path: "/newArrival", component: NewArrivalsView },
  { path: "/about", component: About },
  { path: "/faq", component: FaqsView },
  { path: "/proDetail", component: ProDetailsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Correct property name
});

export default router;
