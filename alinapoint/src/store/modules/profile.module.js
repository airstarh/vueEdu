import axios from "axios";

const state = {
  preloader: false,
  error: false
};

const getters = {};

// actions
const actions = {
  editProfile({ commit, dispatch }, profile) {
    dispatch("global/preloaderOn", {}, { root: true });
    commit("editProfileStart");
    commit("preloaderOn");
    console.log(profile);
    axios
      .put("http://provencal.ru:8120/user", {
        token: localStorage.getItem("token") || null,
        data: { ...profile }
      })
      .then(() => {
        commit("editProfileSuccess", {});
        commit("checkAuthorization");
      })
      .catch(() => {
        commit("editProfileFailed");
        commit("preloaderOff");
      });
  }
};

// mutations
const mutations = {
  editProfileStart() {},
  editProfileSuccess() {},
  editProfileFailed() {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
