<template>
  <van-tabs v-model:active="active" @click-tab="onClickTab">
    <van-tab
      v-for="(item, index) in title"
      :title="item"
      :key="item"
      :name="index"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-grid :column-num="2">
          <van-grid-item v-for="item in itemList" :key="item">
            <van-image :src="item.show.img" />
            <p class="list_p">
              <span>{{ item.title }}</span>
            </p>
          </van-grid-item>
        </van-grid>
      </van-list>
    </van-tab>
  </van-tabs>
</template>
<script>
import axios from "axios";

export default {
  props: [],
  components: {},
  name: "",
  data() {
    return {
      Maindata: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      title: ["时尚", "正在流行", "特卖"],
      par: "pop",
      loading: false,
      finished: false,
      page: 1, //请求第几页
      pageSize: 10, //每页请求的数量
      total: 0, //总共的数据条数
      itemList: [],
    };
  },
  created() {
    //创建组件时，加载第1页数据

    this.getdata("pop", this.page);
    this.getdata("new", this.page);
    this.getdata("sell", this.page);
  },
  //方法 函数写这里
  methods: {
    onClickTab(index) {
      switch (index.name) {
        case 0:
          this.par = "pop";
          break;
        case 1:
          this.par = "new";
          break;
        case 2:
          this.par = "sell";
          break;
      }
      this.itemList = this.Maindata[this.par].list;
    },
    async getdata(par, page) {
      await axios
        .get(
          `http://152.136.185.210:7878/api/m5/home/data?type=${par}&page=${page}`
        )
        .then((res) => {
          console.log(res);
          this.Maindata[par].list = res.data.data.list;
          this.Maindata[par].page = page;
        });
    },
    //滚动加载时触发，list组件定义的方法
    onLoad() {
      //   this.loading = true;
      this.page++;
      console.log(111);
      //   this.getdata(this.par, this.page);
    },
    complled() {
      this.loading = true;
    },
  },
  //计算属性
  computed: {},
};
</script>
<style  >
.van-badge__wrapper {
  color: pink;
}
.list_p {
  font-size: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>