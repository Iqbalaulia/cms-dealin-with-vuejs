import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";
const dataState = createPersistedState({
  key: "storedealin",
  paths: ["user"],
});
// import moment from "moment";
// import { _ } from "vue-underscore";

import Menu from "./Menu";
import MenuBod from "./Menu/BOD";
import Dashboard from "./Dashboard";
import VerificationIdCardNew from "./Verification/IdCard/New";
import VerificationIdCardHistory from "./Verification/IdCard/History";
import VerificationProductNew from "./Verification/Products/New";
import VerificationProductHistory from "./Verification/Products/History";
import Login from "./Login";
import InfoEvent from "./InfoEvent";
export default new Vuex.Store({
  modules: {
    menuList: Menu,
    menuBod: MenuBod,
    dashboard: Dashboard,
    verificationIdCardNew: VerificationIdCardNew,
    verificationIdCardHistory: VerificationIdCardHistory,
    verificationProductNew: VerificationProductNew,
    verificationProductHistory: VerificationProductHistory,
    login: Login,
    infoEvent: InfoEvent,
  },
  state: {},

  mutations: {
    updateState(state, payload) {
      Object.keys(payload).map((item) => {
        state[item] = payload[item];
      });
    },
  },
  actions: {},
  plugins: [dataState],
});
