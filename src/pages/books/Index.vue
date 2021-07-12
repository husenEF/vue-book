<template>
  <div class="col">
    <h3 class="mb-3">Book</h3>
    <router-view></router-view>
    <!-- <pre>{{ all }}</pre> -->
  </div>
</template>

<script>
// import { computed } from "@vue/runtime-core";
// import { useStore } from "vuex";
export default {
  name: "book.index",
//   setup() {
//     const store = useStore();
//     // console.log({ store });
//     return {
//       all: computed(() => store.state.name),
//     };
//   },
};
</script>