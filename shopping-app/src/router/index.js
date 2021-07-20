import Vue from "vue";
import VueRouter from "vue-router";

import homeRouter   from "./route/home.route";
import shopRouter from "./route/shop.route";
import productDetailRouter from "./route/product-detail.route";
import profileRouter from "./route/profile.route";
import checkoutRouter from "./route/checkout.route";
import orderListRouter from "./route/order-list.route";
import oderDetailRouter from "./route/order-detail.route";

Vue.use(VueRouter);

/*================================================
            Per-route Guards
================================================*/

export const router = new VueRouter({
  mode: "history",
  routes: [
    homeRouter,
    shopRouter,
    productDetailRouter,
    profileRouter,
    checkoutRouter,
    orderListRouter,
    oderDetailRouter,
  ],
});
