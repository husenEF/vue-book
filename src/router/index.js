import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "app.index",
    component: () => import("../pages/home/Index.vue"),
  },
  {
    path: "/book",
    name: "book.index",
    component: () => import("../pages/books/Index.vue"),
    children: [
      {
        path: "/",
        name: "book.list",
        component: () => import("../pages/books/List.vue"),
      },
      {
        path: "/edit/:id",
        name: "book.edit",
        component: () => import("../pages/books/Edit.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
