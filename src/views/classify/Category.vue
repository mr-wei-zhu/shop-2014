<template>
  <div>
    <!-- 吸顶 -->
    <van-sticky :offset-top="0">
      <van-button type="primary">分类</van-button>
    </van-sticky>
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="55vw"
      :items="itemsmenu"
      :key="item.maitKey"
      v-for="item in itemsmenu"
      @click="getItemsList(item.maitKey)"
    >
      <template #content>
        <van-image
          :key="item.id"
          v-for="item in itemslist"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  data() {
    return {
      // 分类列表导航菜单
      classifymenu: [],
      // 分类数据列表
      itemslist: [],
    };
  },
  setup() {
    const activeIndex = ref(0);
    return {
      activeIndex,
      itemsmenu: [
        { text: "正在流行", maitKey: "3627" },
        { text: "上衣", maitKey: "582" },
        { text: "裤子", maitKey: "596" },
        { text: "裙子", maitKey: "595" },
        { text: "内衣", maitKey: "598" },
        { text: "女鞋", maitKey: "597" },
        { text: "男友", maitKey: "599" },
        { text: "包包", maitKey: "600" },
        { text: "运动", maitKey: "5253" },
        { text: "配饰", maitKey: "609" },
        { text: "美妆", maitKey: "594" },
        { text: "个护", maitKey: "830" },
        { text: "家居", maitKey: "602" },
        { text: "百货", maitKey: "606" },
        { text: "母婴", maitKey: "603" },
        { text: "食品", maitKey: "605" },
      ],
    };
  },
  created() {
    this.getItemsList();
  },
  methods: {
    getItemsList(maitKey) {
      axios
        .get(
          `http://152.136.185.210:7878/api/m5/subcategory?maitKey=${maitKey}`
        )
        .then((res) => {
          console.log(res);
        });

      // http://152.136.185.210:7878/api/m5/subcategory?maitKey=***
      const url = "http://152.136.185.210:7878/api/m5/subcategory?maitKey=";
      const httpurl = url + maitKey + "";
      console.log(maitKey);
      console.log(httpurl);
      // axios({ url: httpurl })
      //   .then((res) => {
      //     console.log(res);
      //     console.log(111);
      //     // console.log(res.data.data.list);
      //     // this.itemslist = res.data.data.list;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
};
</script>

<style>
.van-button {
  width: 100%;
  background-color: rgb(248, 135, 154);
  border: none;
  height: 60px;
}
.van-tree-select {
  height: 150vw !important;
}
.van-tree-select__nav {
  flex: none;
}

.van-sidebar-item--select::before {
  height: 13vw;
  width: 1vw;
  background-color: rgb(248, 135, 154);
}
</style>
