import axios from "axios";
import { router } from "../../main";
const state = {
  preloader: false,
  error: false,
  token: localStorage.getItem("token") || null,
  user: {}
};

const getters = {
  isAuthenticated: state => (state.token ? state.token : null)
};

const actions = {
  login({ commit, dispatch }, authorization) {
    commit("loginStart");
    dispatch("preloaderOn", {}, { root: true });
    console.log(authorization);
    axios
      .get("http://provencal.ru:8120/user/login", { params: authorization })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        commit("loginSuccess", { token: res.data.token });
        dispatch("authorization/checkAuthorization", {}, { root: true });
        dispatch("preloaderOff", {}, { root: true });
        router.push("/profile");
      })
      .catch(() => {
        commit("loginFailed");
        dispatch("preloaderOff", {}, { root: true });
      });
  },
  logout({ commit }) {
    localStorage.removeItem("token");
    commit("logout");
    router.push("/login");
  },
  checkAuthorization({ commit, dispatch }) {
    commit("checkAuthorizationStart");
    dispatch("preloaderOn", {}, { root: true });
    axios
      .get("http://provencal.ru:8120/user", { params: { token: state.token } })
      .then(res => {
        console.log(res.data);
        commit("checkAuthorizationSuccess", { user: res.data });
        dispatch("preloaderOff", {}, { root: true });
        router.push("/profile");
      })
      .catch(() => {
        commit("checkAuthorizationFailed");
        dispatch("preloaderOff", {}, { root: true });
        localStorage.removeItem("token");
        router.push("/login");
      });
  }
};

const mutations = {
  loginStart() {},
  loginSuccess(state, { token }) {
    state.token = token;
  },
  loginFailed() {},
  logout() {},
  checkAuthorizationStart() {},
  checkAuthorizationSuccess(state, { user }) {
    state.user = user;
  },
  checkAuthorizationFailed() {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
