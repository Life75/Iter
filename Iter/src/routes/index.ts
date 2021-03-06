import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/VAbout.vue";
import CreateIter from "../views/VCreateIter.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/createIter",
    name: "createIter",
    component: CreateIter,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;