import Vue from "vue";
import VueRouter from "vue-router";

import HomeRouter   from "./route/home.route";
// import Shop from "./route/shop.route";
// import ProductDetail from "./route/product-detail.route";
// import Profile from "./route/profile.route";
// import Checkout from "./route/checkout.route";
// import OrderList from "./route/order-list.route";
// import OderDetail from "./route/order-detail.route";

Vue.use(VueRouter);

/*================================================
            Per-route Guards
================================================*/

export default router = new VueRouter({
  mode: "history",
  routes: [
    HomeRouter,
    Shop,
    ProductDetail,
    Profile,
    Checkout,
    OrderList,
    OderDetail,
  ],
});
