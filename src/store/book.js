import { postApi, getApi } from "../api";

const books = {
  state: () => ({
    loading: false,
    data: [],
    loading: true,
  }),
  mutations: {
    setData(state, payload) {
      const data = state;
      data[payload.key] = payload.value;
      state = data;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    getData: async ({ commit }) => {
      commit("setLoading", true);
      getApi("/books")
        .then((res) => {
          // // console.log({ res });
          // books.value = res.data.books;
          commit("setData", { key: "data", value: res.data.books });
        })
        .catch((err) => {
          console.log({ err });
        })
        .finally(() => {
          console.log("fetch book done");
          setTimeout(() => commit("setLoading", false), 2000);
        });
    },
  },
};

export default books;
