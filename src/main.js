import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Layout from "./components/Layout";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: Layout,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
