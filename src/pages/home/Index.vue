<template>
  <h2>Home pages</h2>
  <p>count : {{ count }}</p>
  
  <div class="btn-group">
    <button class="btn btn-sm btn-info">dec</button>
    <button class="btn btn-sm btn-warning" @click="inc()">inc</button>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore, mapActions } from "vuex";
export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);

    // onMounted(() => {});
    const inc = () => store.dispatch("getUser");
    // inc();
    console.log({ count });
    return { count, inc };
  },
};
</script>