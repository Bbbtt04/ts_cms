import { router } from "../router/index";
import { createStore } from "vuex";
import { constantRouterMap, asyncRouterMap } from "../router/index";
import { getrequest } from "../service/login";
import localCache from "../utils/cache";

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some((role) => route.meta.role.indexOf(role) >= 0);
  } else {
    return true;
  }
}

const store = createStore({
  state: {
    routers: constantRouterMap,
    userId: {},
    roles: [],
    addRouters: [],
    isCollapse: false,
  },
  mutations: {
    SET_ROUTES: (state, routers) => {
      state.addRouters = routers;
      state.roles = constantRouterMap.concat(routers);
    },
    SET_ISCOLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse;
    },
  },
  getters: {
    addRouters(state) {
      return [...JSON.parse(JSON.stringify(state.addRouters))];
    },
  },
  actions: {
    // 拉取info
    GetInfo() {
      return new Promise((resolve, reject) => {
        resolve(["admin"]);
      });
    },
    //生成路由表
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { roles } = data;
        const accessRouters = asyncRouterMap.filter((v) => {
          if (roles.indexOf("admin") >= 0) return true;
          if (hasPermission(roles, v)) {
            if (v.children && v.children.length > 0) {
              v.children = v.children.filter((child) => {
                if (hasPermission(roles, child)) {
                  return child;
                }
                return false;
              });
              return v;
            } else {
              return v;
            }
          }
        });
        commit("SET_ROUTES", constantRouterMap);
        return resolve(accessRouters);
      });
    },
    //改变侧边栏
    ChangeCollapse({ commit }) {
      commit("SET_ISCOLLAPSE");
    },
  },
});

export default store;
