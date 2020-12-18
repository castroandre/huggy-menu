import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

(Vue as any).http.interceptors.push(function(request: any, next: any) {
  request.headers.set("Content-Type", "application/json");
  request.headers.set("Access-Control-Allow-Credentials", "true");
  request.headers.set("Access-Control-Allow-Origin", "*");
  request.headers.set("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  request.headers.set("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
});
