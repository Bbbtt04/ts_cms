import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "../store";
import localCache from "../utils/cache";
const layout = () => import("@/views/main/main.vue");

export const constantRouterMap: RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  {
    path: "/login",
    name: "登录",
    component: () => import("@/views/Login/index.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/home",
    component: layout,
    name: "个人界面",
    meta: {
      hidden: false,
      icon: "User",
    },
    children: [
      {
        path: "/home",
        name: "个人界面",
        component: () => import("@/views/home/home.vue"),
        meta: {
          icon: "User",
        },
      },
    ],
  },
  {
    path: "/class",
    name: "班级板块",
    component: layout,
    meta: {
      hidden: false,
    },
    children: [
      {
        path: "/class",
        name: "班级管理",
        component: () => import("@/views/class/class.vue"),
        meta: { icon: "component" },
      },
      {
        path: "/test1",
        name: "test1",
        component: () => import("@/views/class/test1.vue"),
        meta: { icon: "Avatar" },
      },
      {
        path: "/test2",
        name: "test2",
        component: () => import("@/views/class/test2.vue"),
        meta: { icon: "Avatar" },
      },
    ],
  },
  {
    path: "/discuss",
    component: layout,
    name: "讨论板块",
    meta: {
      hidden: false,
    },
    children: [
      {
        path: "/discuss",
        name: "讨论区",
        component: () => import("@/views/discuss/discuss.vue"),
        meta: {
          hidden: false,
        },
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/404.vue"),
    meta: { hidden: true },
  },
  { path: "/:catchAll(.*)", redirect: "/404", meta: { hidden: true } },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap,
});
//异步挂载的路由
export const asyncRouterMap = [];

//全局路由守卫
let load = 0;
const whiteList = ["/login", "404"];
router.beforeEach((to, form, next) => {
  const token = localCache.getCache("token");
  if (token) {
    if (to.path == "/login") {
      return next("/");
    } else {
      if (store.state.roles.length === 0) {
        console.log(router.options.routes);

        //如果还没拉取用户信息
        store
          .dispatch("GetInfo")
          .then((res) => {
            const roles = res;
            store.dispatch("GenerateRoutes", { roles }).then(() => {
              next({ ...to, replace: true });
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        //获取完用户权限
        return next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      //在白名单中,进入
      return next();
    } else {
      next({ path: "/login" });
    }
  }
});

export default router;
