import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Layout from "@/ivew/layout/layout";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "/login",
          component: () => import("@/ivew/login/login"),
          name: "login"
        },
        {
          path: "/movie",
          component: () => import("@/ivew/movie/movie"),
          name: "movie"
        },
        {
          path: "/",
          component: () => import("@/ivew/home/home"),
          name: "home"
        }
      ]
    }
  ]
});
