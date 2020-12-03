import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Random from "../views/Random.vue";
import NewQuote from "../views/NewQuote.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  {
    path: "/random",
    name: "Random",
    component: Random
  },
  {
    path: "/new",
    name: "NewQuote",
    component: NewQuote
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
