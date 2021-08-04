<template>
  <div>
    <van-divider
      :style="{
        color: '#ff9b9b',
        borderColor: '#f0bebe',
        padding: '0 16px',
      }"
    >
      商品详情
    </van-divider>
    <!-- 商品介绍 -->
    <div class="introduction">{{ detailInfo.desc }}</div>
    <main>
      <div v-for="item in mainimg" :key="item">
        <img :src="item" alt="" />
      </div>
    </main>
  </div>
</template>
<script>
export default {
  props: ["detailInfo"],
  components: {},
  name: "",
  data() {
    return {
      loading: false,
      mainimg: [],
    };
  },
  created() {
    // this.mainimg = this.detailInfo.detailImage[0].list;
  },
  mounted() {

  },
  beforeUpdate() {
    this.mainimg = this.detailInfo.detailImage[0].list;
    console.log(this.detailInfo);

  },
  updated() {
    // this.detailInfo;
  },
  //方法 函数写这里
  methods: {},
  //计算属性
  computed: {
    // mainListimg() {
    //     console.log(this.detailInfo);
    //   return this.detailInfo.detailImage[0].list;
    // },
  },
};
</script>
<style  scoped>
s {
  color: #ff9b9b;
}
.introduction {
  font-size: 14px;
  padding: 2px 12px;
  margin: 2px 5px;
  border: 1px solid pink;
  text-align: center;
  color: rgb(230, 102, 102);
}
main {
  margin: 0 2px;
}
main div img {
  width: 100%;
}
</style>