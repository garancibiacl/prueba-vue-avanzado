import Vue from "vue";
import Vuex from "vuex";
import { listarDatos } from "../firebase.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    courses: [],
    loading: true,
    email: "",
  },
  mutations: {
    getCourses(state, data) {
      state.courses = data;
    },

    chargeLoading(state, data) {
      state.loading = data;
    },

    setEmail(state, data) {
      state.email = data;
    },

    eraseEmail(state) {
      state.email = "";
    }
  },
  actions: {
    getData(context) {
      context.commit("changeLoading", true);
      let saveCourses = ( data ) => {
        context.commit("getCourses", data);
        context.commit("changeLoading", false);
      }
      // context.commit("getCourses", data) 
      listarDatos(saveCourses);
    }
  },
 
});

export default store;