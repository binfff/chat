import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: import( '../views/home.vue') //首页
  // },
  {
    path: "/login",
    name: "logn",
    component: () => import("../views/login.vue"), //用户管理iew
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"), //用户管理iew
  },
  {
    path: "/",
    component: () => import("../layout/layout_index.vue"),
    redirect: "/home",
    meta: {
      title: "",
      icon: "el-icon-coin",
      requireAuth: true,
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home.vue"), //首页
        meta: {
          title: "首页",
          icon: "",
          requireAuth: false,
        },
      },
      {
        path: "/chatting",
        name: "chatting",
        component: () => import("../views/chatting.vue"), //对话页面
        meta: {
          title: "对话框",
          icon: "",
          requireAuth: false,
        },
      },
      {
        path: "/createAi",
        name: "createAi",
        component: () => import("../views/createAi.vue"), //对话页面
        meta: {
          title: "创建AI角色",
          icon: "",
          requireAuth: false,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// 路由守卫

export default router;
