import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // Replace with the default component to load

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Correct property name
});

export default router;
