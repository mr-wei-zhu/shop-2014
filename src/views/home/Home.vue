<template>
  <div>
    <Navbar id="navbar">
      <template v-slot:title>购物街</template>
    </Navbar>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      background="pink"
      shape="round"
    />
    <home-swiper :banner="banner"></home-swiper>
    <van-grid :gutter="5" :border="false">
      <van-grid-item v-for="value in homenav" :key="value" class="nav">
        <div class="nva_div">
          <img :src="value.img" alt="" />
        </div>
        <span>{{ value.title }}</span>
      </van-grid-item>
    </van-grid>
    <van-grid :border="false">
      <van-grid-item v-for="item in recommends" :key="item" class="nav_1">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <div>{{ item.title }}</div>
        </a>
      </van-grid-item>
    </van-grid>

    <home-main></home-main>
    <tabbar></tabbar>
  </div>
</template>
<script>
import Tabbar from "views/common/Tabbar/tabbar.vue";

import Navbar from "views/common/Navtbar/Navtbar.vue";
import axios from "axios";
import HomeSwiper from "../common/swiper/home-swiper.vue";
import HomeMain from "./HomeMain.vue";
export default {
  props: [],
  components: { Navbar, HomeSwiper, HomeMain, Tabbar },
  name: "",
  data() {
    return {
      homeData: {},
      banner: [],
      recommends: [],
      homenav: [],
      img: [
        "https://z3.ax1x.com/2021/08/02/fCCXsx.png",
        "https://z3.ax1x.com/2021/08/02/fCCqzR.jpg",
        "https://z3.ax1x.com/2021/08/02/fCCbW9.png",
        "https://z3.ax1x.com/2021/08/02/fCCOQ1.png",
        "https://z3.ax1x.com/2021/08/02/fCCHJJ.png",
        "https://z3.ax1x.com/2021/08/02/fCCxeK.png",
        "https://z3.ax1x.com/2021/08/02/fCCzdO.png",
        "https://z3.ax1x.com/2021/08/02/fCCjL6.jpg",
      ],
    };
  },
  created() {
    axios
      .get("http://152.136.185.210:7878/api/m5/home/multidata")
      .then((res) => {
        console.log(res);
        this.banner = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });

    axios.get("http://152.136.185.210:7878/api/m5/category").then((res) => {
      console.log(res);
      this.homenav = res.data.data.category.list.slice(1, 6);
      this.homenav = this.homenav.concat(
        res.data.data.category.list.slice(7, 10)
      );
      this.merge();
    });
  },
  //方法 函数写这里
  methods: {
    merge() {
      this.homenav.forEach((item, index) => {
        item["img"] = this.img[index];
      });
    },
  },
  //计算属性
  computed: {},
};
</script>
<style>
/* @import url("~assets/css/Home/dist/home.css");
 */
#navbar {
  background: pink;
}
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar__content {
  height: 40px;
  border: none;
  background: pink;
}

.van-search {
  border-top: none;
}
.van-nav-bar {
  border: none;
}
.van-nav-bar::after {
  bottom: 100%;
}
.nav {
  /* border-radius: 50% ; */
}
.nav .nva_div {
  border-radius: 50%;
  overflow: hidden;
}
.nav_ul {
  display: flex;
  flex-wrap: wrap;
}
.nav_ul li span {
  display: block;
}
.nav img {
  width: 100%;
}
.nav_1 {
  font-size: 12px;
}
.nav_1 div {
  text-align: center;
}
.nav_1 img {
  width: 100%;
}
</style>