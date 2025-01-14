import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/AboutView.vue";
import Home from "../views/HomeView.vue"; // Replace with the default component to load
import BestSellersView from "@/views/BestSellersView.vue";
import FaqsView from "@/views/FaqsView.vue";
import NewArrivalsView from "@/views/NewArrivalsView.vue";
import ProDetailsView from "@/views/ProDetailsView.vue";
import PromotionsView from "@/views/PromotionsView.vue";
import Productcard from "@/views/CartView.vue";
import AllProduct from "@/views/AllProduct.vue";
import Productview from "@/views/Productview.vue";
import MakePaymentView from "@/views/MakePaymentView.vue";
import CartView from "@/views/CartView.vue";
import OrderView from "@/views/OrderView.vue";
import AllProductsView from "@/views/AllProductsView.vue";

const routes = [
  { path: "/", name: "Home", component: Home, },
  { path: "/allProduct", name: "AllProduct", component: AllProductsView, },
  { path: "/bestSeller", name: "BestSeller", component: BestSellersView },
  { path: "/promotion", name: "Promotion", component: PromotionsView },
  { path: "/newArrival", name: "NewArrival", component: NewArrivalsView },
  { path: "/about", name: "About", component: About },
  { path: "/faq", name: "Faq", component: FaqsView },
  { path: "/proDetail", name: "ProDetail", component: ProDetailsView },
  { path: "/cart", name: "Cart", component: Productcard },
  { path: "/productview", name: "Productview", component: Productview },
  { path: "/cart", name: "Cart", component: CartView },
  { path: "/makePayment", name: "MakePayment", component: MakePaymentView },
  { path: "/order-history", name: "OrderHistory", component: () => import("@/views/OrderView.vue") },
  { path: "/profile", name: "Profile", component: () => import("@/views/ProfileView.vue") },
  { path: "/order", name: "Order", component: OrderView }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
