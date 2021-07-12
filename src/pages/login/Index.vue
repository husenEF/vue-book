<template>
  <div class="col-12 h-100">
    <div class="row justify-content-md-center">
      <div class="col-md-4">
        <form @submit.prevent="login()">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <pre>{{ username }}</pre>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  class="form-control"
                  v-model="username"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { onMounted, toRefs } from "@vue/runtime-core";
import { postApi } from "../../api";
export default {
  setup() {
    const user = reactive({
      username: "",
      password: "",
    });

    function login() {
      const form = new FormData();
      form.append("username", user.username);
      form.append("password", user.password);
      postApi("/users/login", form)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("users", JSON.stringify(res.data.user));
        })
        .catch((err) => {
          console.log({ err });
        })
        .finally(() => {
          console.log("done login");
        });
    }

    return { ...toRefs(user), login };
  },
};
</script>