<template>
  <van-nav-bar left-arrow class="navbar" fixed placeholder z-index="999">
    <template #left>
      <slot name="left"></slot>
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>
<script>
export default {
  props: [],
  components: {},
  name: "",
  data() {
    return {};
  },

  //方法 函数写这里
  methods: {
    onClickLeft() {
      console.log(1234);
    },
    onClickRight() {
      console.log(444444);
    },
  },
  //计算属性
  computed: {},
};
</script>
<style >
.navbar {
  height: 40px;
}
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar__content {
  height: 40px;
  border: none;
  background: pink;
}
</style>
