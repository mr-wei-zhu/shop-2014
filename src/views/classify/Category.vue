<template>
  <div>
    <!-- 吸顶 -->
    <van-sticky :offset-top="0">
      <van-button type="primary">分类</van-button>
    </van-sticky>

    <van-tree-select
      :items="classifymenu"
      v-model:main-active-index="activeIndex"
     
      @click="getClassifyList(activeIndex)"
    >
      <template #content>
        <!-- <van-image
          v-if="activeIndex === 0"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        /> -->
        <van-grid :border="false" :column-num="3">
          <!-- <van-grid-item>
            <van-image :src="item.img" :key="item" v-for="item in classifymenu" />
          </van-grid-item>
  -->
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // 分类列表导航菜单
      classifymenu: [],
      // 分类数据列表
      classifylist: [],
    };
  },
  created() {
    this.getClassifyMenu();
  },
  methods: {
    getClassifyMenu() {
      axios.get(`http://152.136.185.210:7878/api/m5/category`).then((res) => {
        console.log(res);
        this.classifymenu = res.data.data.category.list;
        this.classifymenu.forEach((item) => {
          item.text = item.title;
          item.activeIndex=item.maitKey
        });
        console.log(this.classifymenu);
      });
    },
    getClassifyList(activeIndex) {
      console.log(activeIndex);
      // axios
      //   .get(
      //     `http://152.136.185.210:7878/api/m5/subcategory?maitKey=${maitKey}`
      //   )
      //   .then((res) => {
      //     console.log(res);
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
