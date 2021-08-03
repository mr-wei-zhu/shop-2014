<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="10"
    >
      //itemList换成你自己的数据
      <van-cell v-for="item in Maindata.pop.list" :key="item.id"> </van-cell>
    </van-list>

    //没数据时显示
    <div class="no-data" v-if="!this.itemList">
      <!-- <img src="../assets/images/null.png" alt="暂无记录" class="img" /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  created() {
    //创建组件时，加载第1页数据
    this.getroadList();
  },

  data() {
    return {
      loading: false,
      finished: false,
      page: 1, //请求第几页
      pageSize: 10, //每页请求的数量
      total: 0, //总共的数据条数
      itemList: [],
    };
  },

  methods: {
    getroadList() {
      let params = {
        page: this.page,
        pageSize: this.pageSize,
      };

      //this.$api.pay.schedule(params)是我自己封装的get请求接口
      //   this.$api.pay.schedule(params).then((res) => {
      //     let rows = res.data.rows; //请求返回当页的列表

      //     this.loading = false;
      //     this.total = res.data.total;

      //     if (rows == null || rows.length === 0) {
      //       // 加载结束
      //       this.finished = true;
      //       return;
      //     }

      //     // 将新数据与老数据进行合并
      //     this.itemList = this.itemList.concat(rows);

      //     //如果列表数据条数>=总条数，不再触发滚动加载
      //     if (this.itemList.length >= this.total) {
      //       this.finished = true;
      //     }
      //   });
    },

    //滚动加载时触发，list组件定义的方法
    onLoad() {
      this.page++;
      this.getroadList();
    },
  },
};
</script>