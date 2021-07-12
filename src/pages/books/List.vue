<template>
  <div class="card rounded shadow">
    <div class="card-header">
      Book List

      <router-link
        :to="{ name: 'book.create' }"
        class="btn btn-primary float-right"
        >Add
      </router-link>
    </div>
    <div class="card-body">
      <!--
       {
        "createdAt": 1580812938,
        "createdBy": {
          "fullname": "Incenplus",
          "id": "5e394a2ce43ddee40b30a41e",
          "username": "icp"
        },
        "deletedAt": null,
        "description": "Mantpa",
        "id": "5e394a8a91476838631e48a1",
        "modifiedAt": 1625208976,
        "modifiedBy": {
          "fullname": "Incenplus",
          "id": "5e394a2ce43ddee40b30a41e",
          "username": "icp"
        },
        "name": "Gul Gul"
      },
       -->
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, i) in books" :key="book.id">
            <td>{{ i + 1 }}</td>
            <td>{{ book.name }}</td>
            <td>{{ book.description }}</td>
            <td>{{ book.createdBy.fullname }}</td>
            <td>
              <div class="btn-group">
                <router-link
                  :to="{ name: 'book.edit', params: { id: book.id } }"
                  class="btn btn-sm btn-success"
                >
                  edit
                </router-link>
                <router-link
                  :to="{ name: 'book.detail', params: { id: book.id } }"
                  class="btn btn-sm btn-info"
                >
                  detail
                </router-link>
                <button class="btn btn-danger btn-sm">delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

import api, { getApi } from "../../api";

export default {
  name: "book.list",
  setup() {
    // let hardtoke = "3b18bd0194ad9aff857c5af867427cad9d1d2ae3c4d8f00d57ed8e77";
    let books = ref([]);

    onMounted(() => {
      getApi("/books")
        .then((res) => {
          // console.log({ res });
          books.value = res.data.books;
        })
        .catch((err) => {
          console.log({ err });
        })
        .finally(() => {
          console.log("done");
        });
    });

    return { books };
  },
};
</script>