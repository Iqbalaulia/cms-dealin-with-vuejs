import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";
// import { _ } from "vue-underscore";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
    meta: {
      title: "Login",
      allowedRole: ["all"],
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/ADMIN/Home"),
    meta: {
      title: "Dashboard",
      allowedRole: ["all"],
    },
  },
  {
    path: "/info-event",
    name: "InfoEvent",
    component: () =>
      import(/* webpackChunkName: "info-event" */ "../views/ADMIN/InfoEvent"),
    meta: {
      title: "Info Event",
      allowedRole: ["all"],
    },
  },
  {
    path: "/info-event/new-event",
    name: "New Event ",
    component: () =>
      import(
        /* webpackChunkName: "new-event" */ "../views/ADMIN/InfoEvent/NewEvent"
      ),
    meta: {
      title: "Add Info & Event",
      allowedRole: ["all"],
    },
  },
  {
    path: "/verification/id-card",
    name: "VerificationIdCarad",
    component: () =>
      import(
        /* webpackChunkName: "verification-idcard" */ "../views/ADMIN/Verification/IdCard"
      ),
    meta: {
      title: "Verification",
      allowedRole: ["all"],
    },
  },
  {
    path: "/verification/product",
    name: "VerificationProduct",
    component: () =>
      import(
        /* webpackChunkName: "verification-product" */ "../views/ADMIN/Verification/Product"
      ),
    meta: {
      title: "Verification",
      allowedRole: ["all"],
    },
  },
  {
    path: "/verification/id-card/:id/detail",
    name: "VerificationDetail",
    component: () =>
      import(
        /* webpackChunkName: "verification-detail-id-card" */ "../views/ADMIN/Verification/IdCard/New/Detail"
      ),
    meta: {
      title: "Verification Detail",
      allowedRole: ["all"],
    },
  },
  {
    path: "/verification/id-card/:id/history",
    name: "VerificationDetailHistory",
    component: () =>
      import(
        /* webpackChunkName: "verification-detail-id-card-history" */ "../views/ADMIN/Verification/IdCard/History/Detail"
      ),
    meta: {
      title: "Verification Detail History",
      allowedRole: ["all"],
    },
  },
  {
    path: "/verification/product/:id/detail",
    name: "VerificationDetailProduct",
    component: () =>
      import(
        /* webpackChunkName: "verification-detail-product" */ "../views/ADMIN/Verification/Product/New/Detail"
      ),
    meta: {
      title: "Verification Detail Product",
      allowedRole: ["all"],
    },
  },
  {
    path: "/verification/product/:id/history",
    name: "VerificationDetailProductHistory",
    component: () =>
      import(
        /* webpackChunkName: "verification-detail-product-history" */ "../views/ADMIN/Verification/Product/History/Detail"
      ),
    meta: {
      title: "Verification Detail Product",
      allowedRole: ["all"],
    },
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/ADMIN/Users"),
    meta: {
      title: "Users",
      allowedRole: ["all"],
    },
  },
  {
    path: "/voucher",
    name: "Voucher",
    component: () =>
      import(/* webpackChunkName: "voucher" */ "../views/ADMIN/Voucher"),
    meta: {
      title: "Voucher",
      allowedRole: ["all"],
    },
  },
  {
    path: "/complaint",
    name: "Complaint",
    component: () =>
      import(/* webpackChunkName: "complaint" */ "../views/ADMIN/Complaint"),
    meta: {
      title: "Complaint",
      allowedRole: ["all"],
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () =>
      import(/* webpackChunkName: "help" */ "../views/ADMIN/Help"),
    meta: {
      title: "help",
      allowedRole: ["all"],
    },
  },
  {
    path: "/about-applicaiton",
    name: "AboutApplication",
    component: () =>
      import(
        /* webpackChunkName: "about-application" */ "../views/ADMIN/AboutApplication"
      ),
    meta: {
      title: "About Application",
      allowedRole: ["all"],
    },
  },
  {
    path: "/categories",
    name: "Categories",
    component: () =>
      import(/* webpackChunkName: "categories" */ "../views/ADMIN/Categories"),
    meta: {
      title: "Categories",
      allowedRole: ["all"],
    },
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: () =>
      import(/* webpackChunkName: "wallet" */ "../views/ADMIN/Wallet"),
    meta: {
      title: "Wallet",
      allowedRole: ["all"],
    },
  },
  {
    path: "/analisa-global",
    name: "Analytics",
    component: () =>
      import(
        /* webpackChunkName: "analisa-global" */ "../views/ADMIN/AnalisaGlobal"
      ),
    meta: {
      title: "Analisa Global",
      allowedRole: ["all"],
    },
  },
  {
    path: "/base-global",
    name: "Base",
    component: () =>
      import(/* webpackChunkName: "base-global" */ "../views/Base"),
    meta: {
      title: "Base Global",
      allowedRole: ["all"],
    },
  },



  // BOD

  {
    path: "/bod/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "home-bod" */ "../views/BOD/Home"),
    meta: {
      title: "Dashboard",
      allowedRole: ["all"],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
