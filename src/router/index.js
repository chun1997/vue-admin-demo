import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Login = () => import("views/login/index");
const Home = () => import("views/home/index");
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
];

const router = new VueRouter({
  routes,
});

export default router;
