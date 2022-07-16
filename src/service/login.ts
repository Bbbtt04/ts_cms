import { ElMessage } from "element-plus";
import { request } from "./request";
interface getBody {
  studentId: string;
}
interface postBody {
  name?: string;
  password?: string;
}
interface patchBody {
  Nickname?: string;
  Avatar?: string;
  Sex?: string;
  Description?: string;
  Background?: string;
}
export function getrequest(param: string) {
  return request.get(param);
}
export function postrequest(param: string, body: postBody) {
  return request.post(param, body);
}
export function patchrequest(param: string, body: patchBody) {
  return request.patch(param, body);
}
request.interceptors.request.use((config) => {
  if (window.localStorage.getItem("token") != "null") {
    config!.headers!.Authorization = `Bearer ${window.localStorage.getItem(
      "token"
    )}`;
  }
  return config;
});
import localCache from "../utils/cache";
request.interceptors.response.use(
  (res) => {
    if (res.status == 200) {
      localCache.setCache("token", res.data.token);
      ElMessage.closeAll();
      ElMessage.success({
        message: res.data.message,
        center: true,
      });
      return res;
    }
  },
  (err: any) => {
    console.log(err);
    if (!err.response) {
      ElMessage.closeAll();
      ElMessage.error({
        message: "请检查网络设置~",
        center: true,
      });
    }
    if (err.response.status == 401) {
      ElMessage.closeAll();
      ElMessage.error({
        message: err.response.data.message,
        center: true,
      });
    }
    return Promise.reject(err);
  }
);
