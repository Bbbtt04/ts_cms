import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/reset.scss";
import "element-plus/theme-chalk/src/index.scss";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

//全局指令
import dirctive from "./directive";
dirctive(app);
