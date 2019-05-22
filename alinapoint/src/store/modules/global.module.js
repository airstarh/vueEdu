const state = {
  isPreloader: false
};

const getters = {
  isPreloader(state) {
    return state.isPreloader;
  }
};

const actions = {
  preloaderOn({ commit }) {
    commit("preloaderOn");
  },
  preloaderOff({ commit }) {
    commit("preloaderOff");
  }
};

const mutations = {
  preloaderOn(state) {
    state.isPreloader = true;
  },
  preloaderOff(state) {
    state.isPreloader = false;
  }
};

export default {
  //namespaced: true,
  state,
  getters,
  actions,
  mutations
};
