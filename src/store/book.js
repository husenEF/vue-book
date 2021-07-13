import { postApi, getApi } from "../api";

const books = {
  state: () => ({
    loading: false,
    data: [],
    loading: true,
    book: {
      author: "",
      description: "",
      name: "",
      id: "",
    },
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
    delBook: async ({ commit }, payload) => {
      //delete not found in api
    },
    getBook: async ({ commit }, id) => {
      commit("setLoading", true);
      getApi("/books/detail", { id })
        .then((res) => {
          // console.log({ book: res.data });
          const {
            data: { id, name, description, createdBy },
          } = res;
          const book = {
            author: createdBy.fullname,
            name,
            description,
            id,
          };
          // const { id, createdBy, name, description } = res.data;
          //   console.log({ id, createdBy, name, description });
          // book.author = createdBy;
          // book.description = description;
          // book.name = name;
          // book.id = id;
          commit("setData", { key: "book", value: book });
        })
        .catch((err) => {
          console.log({ err });
        })
        .finally(() => {
          console.log("finish loading");
        });
    },
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
