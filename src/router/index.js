import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "app.index",
    component: () => import("../pages/home/Index.vue"),
  },
  {
    path: "/book",
    name: "book.index",
    meta: { requiresAuth: true },
    component: () => import("../pages/books/List.vue"),
    // childredn: [
    //   {
    //     path: "",
    //     // name: "book.list",
    //     component: () => import("../pages/books/List.vue"),
    //   },
    //   {
    //     path: "edit/:id",
    //     name: "book.edit",
    //     component: () => import("../pages/books/Edit.vue"),
    //   },
    //   {
    //     path: "create",
    //     name: "book.create",
    //     component: () => import("../pages/books/Create.vue"),
    //   },
    // ],
  },
  {
    path: "/create",
    name: "book.create",
    meta: { requiresAuth: true },
    component: () => import("../pages/books/Create.vue"),
  },
  {
    path: "/book/:id",
    name: "book.edit",
    meta: { requiresAuth: true },
    component: () => import("../pages/books/Edit.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});
const token = localStorage.getItem("token");

const isAuthenticated = token !== null && token !== "";

router.beforeEach((to, from, next) => {
  // if (to.name !== "login" && !isAuthenticated) next({ name: "login" });
  // // if the user is not authenticated, `next` is called twice
  // next();
  console.log({ to, token, isAuthenticated });
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isAuthenticated) {
      next({
        name: "login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
  // next();
});

export default router;
