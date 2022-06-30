import LoginViews from "../views/LoginViews.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginViews,
    title: "Login",
    meta: {
      requiredAuth: false,
    },
  },
];

export default routes;
