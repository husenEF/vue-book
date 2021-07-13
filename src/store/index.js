import { createStore } from "vuex";
import axios from "axios";
import { getApi, postApi } from "../api";

const users = {
  state: () => ({
    user: {
      id: "",
      fullname: "",
      username: "",
    },
    token: "",
    isLogin: false,
    loading: false,
  }),
  mutations: {
    setData(state, payload) {
      const data = state;
      data[payload.key] = payload.value;
      state = data;
    },
    setLogin(state, payload) {
      state.isLogin = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    login: async ({ commit, dispatch }, payload) => {
      console.log({ payload });
      commit("setLoading", true);
      postApi("/users/login", payload)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("users", JSON.stringify(res.data.user));
          // router.push("/");
          // window.location = "/";
          commit("setData", { key: "user", value: res.data.user });
          commit("setData", { key: "token", value: res.data.token });
          commit("setLogin", true);
          console.log("succse login");
        })
        .catch((err) => {
          console.log({ err });
        })
        .finally(() => {
          console.log("done login");
          commit("setLoading", false);
        });
    },
  },
};

const count = {
  state: () => ({
    count: 0,
    loading: false,
  }),
  mutations: {
    inc(state) {
      state.count++;
    },
    dec(state) {
      state.count--;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    getUser: async ({ commit }) => {
      commit("setLoading", true);
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log("get user", res);
        })
        .catch((e) => {
          console.log("get user", { e });
        })
        .finally(() => {
          console.log("get user", "final");
          commit("setLoading", false);
        });
    },
  },
};

const store = createStore({
  state: {
    name: "Vue",
  },
  modules: {
    user: users,
    count,
  },
});

export default store;
