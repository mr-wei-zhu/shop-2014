<template>
  <van-grid :column-num="2">
    <van-grid-item v-for="item in Maindata.pop.list" :key="item">
      <van-image :src="item.show.img" />
      <p>
        <span>{{ item.title }}</span>
      </p>
    </van-grid-item>
  </van-grid>
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
  methods: {},
  //计算属性
  computed: {},
};
</script>
<style lang="scss" scoped>
</style>