import axios from "axios";

const state = {
  preloader: false,
  error: false,
  registration: {}
};

const getters = {};

const actions = {
  sendRegistration({ commit, dispatch }, registration) {
    commit("registrationStart");
    dispatch("preloaderOn", {}, { root: true });
    console.log(registration);
    axios
      .post("http://provencal.ru:8120/user/registration", registration)
      .then(res => {
        console.log(res);
        commit("registrationSuccess", {});
        dispatch("preloaderOff", {}, { root: true });
      })
      .catch(() => {
        commit("registrationFailed");
        dispatch("preloaderOff", {}, { root: true });
      });
  }
};

const mutations = {
  registrationStart() {},
  registrationSuccess() {},
  registrationFailed() {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
