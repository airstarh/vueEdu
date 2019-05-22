import Vue from "vue";
import createLogger from 'vuex/dist/logger';
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import Vuex from "vuex";
//import store from "./store/index";
import BootstrapVue from "bootstrap-vue";
import KeenUI from "keen-ui";
import "../public/a.scss";

import global from './store/modules/global.module';
import registration from './store/modules/registration.module';
import authorization from './store/modules/authorization.module';
import profile from "./store/modules/profile.module";

import App from "./App.vue";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Profile from "./pages/authentication/Profile";

Vue.config.productionTip = false;
Vue.config.devtools = true
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(KeenUI);
Vue.use(VueCookies);
VueCookies.config("7d");
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'
 const store = new Vuex.Store({
  modules: {
    global,
    registration,
    authorization,
    profile
  },
 plugins: [createLogger()],
  strict: debug,
})

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/profile");
// };

const ifAuthenticated = (to, from, next) => {
	console.log(store)
	console.log(store.getters['authorization/isAuthenticated'])
  if (store.getters['authorization/isAuthenticated']) {
    next();
    return;
  }
  next("/login");
};
export const router = new VueRouter({
  mode: "history",
  //base:"/",
  routes: [
  { path: "/login", component: Login, },
  { path: "/profile", component: Profile,beforeEnter: ifAuthenticated  },
	{ path: "/register", component: Register },
	{ path: '*', redirect: '/login' }
  ]
});

new Vue({
  store, 
  router,
  render: h => h(App),
}).$mount("#app");
