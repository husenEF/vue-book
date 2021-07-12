<template>
  <div class="container">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-dark text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link :to="{ name: 'app.index' }" class="nav-link" exact>
            Home
          </router-link>
          <!-- <a href="#" class="nav-link active" aria-current="page">Home</a> -->
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'book.index' }" class="nav-link">
            Book
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="!isLogin" :to="{ name: 'login' }" class="nav-link">
            Login
          </router-link>
          <button v-else class="nav-link" @click="logout">Logout</button>
        </li>
        <!-- <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li> -->
      </ul>
    </header>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getApi } from "../../api";
export default {
  name: "Header",
  setup() {
    const token = localStorage.getItem("token");
    const isLogin = token !== null && token !== "";
    const router = useRouter();

    const logout = () => {
      getApi("/users/logout")
        .then((res) => {
          console.log({ res });
          localStorage.removeItem("token");
          localStorage.removeItem("users");
          window.location = "/";
          // router.push({ name: "app.index" });
        })
        .catch((error) => {
          console.log({ error });
        })
        .finally(() => console.log("finish logout"));
    };
    return { isLogin, logout };
  },
};
</script>