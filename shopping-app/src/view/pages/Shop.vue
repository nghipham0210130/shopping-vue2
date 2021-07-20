<template>
  <div class="shop">
    <div class="shop__header">
      <div class="header__nav">
        <router-link :to="{ name: 'Home' }" :class="{active: $router.path == '/home'}">Home</router-link>
        /
        <router-link :to="{ name: 'ProductCategory' }" :class="{active: $router.path == '/product-category'}"
          >Shop</router-link
        >
      </div>
    </div>
    <sidebar></sidebar>
    <transition>
      <keep-alive>
        <router-view ></router-view>
      </keep-alive>
    </transition>
    </div>
</template>

<script>
import Sidebar from "../layout/Sidebar";

export default {
  components: {
    sidebar: Sidebar,
  },
  data() {
    return {
      isActive: true,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.shop__header {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  .header__nav {
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(119, 119, 119, 0.5);
    a {
      color: rgba(119, 119, 119, 0.5);
      &.active {
        color: rgb(34, 34, 34);
      }
    }
  }
}
</style>