<template>
  <van-tabbar v-model="active" route class="nav" placeholder>
    <van-tabbar-item
      class="nav_item"
      v-for="item in menu"
      :key="item.path"
      :icon="item.icon"
      :to="item.path"
      >{{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      menu: [
        { path: "/home", text: "首页", icon: "wap-home-o" },
        { path: "/Category", text: "热卖", icon: "hot-o" },
        { path: "/cart", text: "购物车", icon: "cart-o" },
        { path: "/users", text: "我的", icon: "user-o" },
      ],
    };
  },
  components: {},
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
  created() {
    console.log("App", this);
  },
};
</script>

<style lang="less" scoped>
</style>