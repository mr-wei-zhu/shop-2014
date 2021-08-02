<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
    lazy-render
  >
    <van-swipe-item v-for="(item, index) in banner" :key="item[index]">
      <img :src="item.image" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  name: "",
  data() {
    return {};
  },
  created() {
    console.log(this.banner);
  },
  //方法 函数写这里
  methods: {},
  //计算属性
  computed: {},
};
</script>
<style >
.van-swipe-item img {
  width: 100%;
}
</style>