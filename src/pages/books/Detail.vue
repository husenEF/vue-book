<template>
  <div class="col-6 mx-auto">
    <h3 class="mb-4">Detail</h3>
    <div class="card shadow mb-5">
      <div class="card-header">
        {{ book.name }}
        <router-link class="btn btn-sm btn-info" :to="{ name: 'book.index' }"
          >back</router-link
        >
      </div>
      <div class="card-body">
        <div><strong>Author : </strong>{{ book.author }}</div>
        <div><strong>Description:</strong><br />{{ book.description }}</div>
        <div><strong>ID : </strong>{{ book.id }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
// import { getApi } from "../../api";
import store from "../../store";
export default {
  onMounted() {
    console.log("on mounted");
  },
  setup() {
    let book = computed(() => store.state.books.book);
    const fetSingle = (id) => store.dispatch("getBook", id);
    const route = useRoute();
    // console.log({ params: route.params });
    onMounted(() => {
      fetSingle(route.params.id);
      //without vuex
      // getApi("/books/detail", { id: route.params.id })
      //   .then((res) => {
      //     const { id, createdBy, name, description } = res.data;
      //     //   console.log({ id, createdBy, name, description });
      //     book.author = createdBy;
      //     book.description = description;
      //     book.name = name;
      //     book.id = id;
      //   })
      //   .catch((err) => {
      //     console.log({ err });
      //   })
      //   .finally(() => {
      //     console.log("finish loading");
      //   });
    });

    return { book };
  },
};
</script>