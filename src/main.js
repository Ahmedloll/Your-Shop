import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");