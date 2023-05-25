const state = {
  data: {
    form: {
      username: "",
      password: "",
    },
    isLoading: false,
  },
};

const mutations = {
  changeLogin(state, payload) {
    state.data = Object.assign({}, state.data, payload);
  },
};

const actions = {
  // async handleSubmitLogin({ commit, state }) {
  //   commit("changeLogin", {
  //     isLoading: true,
  //   });
  //   const { data } = state;
  //   let formData = {
  //     username: data.form.username,
  //     password: data.form.password,
  //   };
  //   const result = await
  // },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
