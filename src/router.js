import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Error from "@/views/Error.vue";
import CoinDetail from "@/views/CoinDetail";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: Error
  },
  {
    path: "/coin/:id",
    name: "coid-detail",
    component: CoinDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
