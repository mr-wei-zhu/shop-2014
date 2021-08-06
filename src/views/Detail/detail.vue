<template>
  <div id="detail">
    <van-tabs v-model:active="active" scrollspy sticky>
      <template #nav-left id="nav_left"
        ><van-icon name="arrow-left" @click="goBack()"
      /></template>
      <template #nav-right id="nav-right"
        ><van-icon name="new-arrival-o"
      /></template>
      <van-tab title="商品">
        <!-- 商品轮播图 -->
        <van-swipe :autoplay="5000" lazy-render indicator-color="white">
          <van-swipe-item v-for="image in swiper" :key="image">
            <img :src="image" />
            <!-- {{ image }} -->
          </van-swipe-item>
        </van-swipe>

        <!-- 商品标题 -->
        <detail-base-info :goods="goods"></detail-base-info>
        <!-- 店铺信息 -->
        <detail-shop-info :shop="shop"></detail-shop-info>
        <!-- 优惠卷 -->
        <coupons></coupons>
        <!-- 商品介绍 -->
      </van-tab>

      <!-- 商品详情 -->
      <van-tab title="商品详情">
        <detamain :detailInfo="detailInfo"></detamain>
      </van-tab>
      <!-- 商品参数 -->
      <van-tab title="商品参数" class="shopdetail">
        <h3>产品参数</h3>
        <!-- 产品参数 -->
        <van-list>
          <div v-for="(item, key) in set" :key="key" class="listinfo">
            <p>{{ item.key }}</p>
            &nbsp; &nbsp;
            <p>
              <mark class="mark"> {{ item.value }}</mark>
            </p>
          </div>
        </van-list>

        <!-- 尺码说明  根据具体数据渲染，有的没有，有的有，需要更改 -->
        <h3>尺码说明</h3>
        <!-- <table class="table" v-for="(item, index) in rule" :key="index">
          <tr>
            <td>
              {{ item[index][0] }}:{{ item[index][1] }}{{ item[index][2]
              }}{{ item[index][3] }}
            </td>
          </tr>
        </table> -->
      </van-tab>
      <!-- 评论 -->
      <van-tab title="评论" class="comment">
        <h3>评论</h3>
        <div class="commentbox" :key="item" v-for="item in commentlist">
          <img :src="'https:' + item.user.avatar" alt="" />
          <div>
            <!-- 昵称 -->
            <h2>{{ item.user.uname }}</h2>
            <!-- 评论内容 -->
            <p>{{ item.content }}</p>
            <!-- 商品颜色和尺码 -->
            <span>{{ item.style }}</span>

            <!-- <span>{{ item.extraInfo }}</span> -->
            <!-- 用户身高体重 -->
            <span :key="subitem" v-for="subitem in item.extraInfo">
              {{ subitem }}&nbsp; &nbsp; &nbsp;</span
            >

            <!-- 商家回复 -->
            <p>{{ item.explain }}</p>
            <br />
            <!-- 评论图片 -->
            <img
              :src="'https:' + subitem"
              alt=""
              :key="subitem"
              v-for="subitem in item.images"
              class="pltimg"
            />
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-button
        color="#be99ff"
        type="warning"
        text="加入购物车"
        @click="addcart"
      />
      <van-action-bar-button color="#7232dd" type="danger" text="立即购买" />
    </van-action-bar>
    <van-dialog
      v-model:show="show"
      title="添加商品"
      show-cancel-button
      class="addcart"
      @confirm="qaddcart"
    >
      <p>{{ detailData.skuInfo.title }}</p>
      <div>
        <img :src="detailData.itemInfo.topImages[0]" alt="" />
      </div>
    </van-dialog>
  </div>
</template>
<script>
import { getDetail, Goods, Shop } from "../../network/detail";
import DetailBaseInfo from "./DetailBaseInfo.vue";
import DetailShopInfo from "./DetailShopInfo.vue";
import Coupons from "./coupons.vue";
import Detamain from "./Detamain.vue";
export default {
  props: [],
  components: { DetailBaseInfo, DetailShopInfo, Coupons, Detamain },

  name: "detail",
  data() {
    return {
      goodsg: [],
      id: "",
      detailData: null,
      swiper: null,
      goods: {},
      shop: {},
      detailInfo: {},
      rule: [],
      rules: [],
      set: [],
      active: "",
      commentlist: [],
      show: false,

    };
  },
  created() {
    this.id = this.$route.params.id;
    getDetail(this.id).then((res) => {
      console.log(res);
      const data = res.data.result;
      this.detailData = data;
      //轮播图
      this.swiper = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      // console.log(this.goods);
      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo;
      // 产品参数、尺码说明
      this.detail = data.itemParams;
      this.set = this.detail.info.set;
      this.rule = this.detail.rule.tables;

      console.log(this.rules);
      // console.log(this.set);
      // 评论
      this.commentlist = this.detailData.rate.list;
      // console.log(this.commentlist);
    });
  },
  //方法 函数写这里
  methods: {
    goBack() {
      this.$router.push("/home");
    },
      addcart() {
      console.log(this.goodsg);
      this.show = !this.show;
    },
    qaddcart() {
      // Bus.$emit("addgoods", this.goodsg);
      // axios({
      //   method: "post",
      //   url: "/api/addgoods",
      //   params: {
      //     iid: this.goodsg.iid,
      //     id: window.sessionStorage.getItem("id"),
      //   },
      // });
      let arr = [];
      let data = window.localStorage.getItem("di");
      if (!data) {
        console.log("没东西");
        arr.push(this.goodsg);
        window.localStorage.setItem("di", JSON.stringify(arr));
      } else {
        console.log("有东西");
        data = JSON.parse(data);
        console.log(data);
        data.push(this.goodsg);
        window.localStorage.setItem("di", JSON.stringify(data));
        // window.localStorage.setItem("di", JSON.stringify(arr));

        // window.localStorage.setItem("di", JSON.stringify(this.goodsg));
      }
      // console.log(JSON.parse(data));
      // window.localStorage.setItem("di", JSON.stringify(this.goodsg));
      // this.$router.push('/cart')
    },
  },
  //计算属性
  computed: {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1 {
  line-height: 26px;
}
h3 {
  line-height: 46px;
  font-size: 16px;
}
.van-badge__wrapper {
  width: 30px;
  text-align: center;
  justify-content: center;
  line-height: 44px;
}
#nav-right {
  width: 30px;
  display: block;
}
.listinfo {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.van-list {
  font-size: 14px;
}
.van-list p {
  padding: 6px;
  margin: 0px;
}
.listinfo p:nth-child(1) {
  width: 40px;
}
.mark {
  background-color: #fff;
  color: red;
}
.van-tab {
  font-size: 14px;
}
.van-icon-new-arrival-o {
  font-size: 25px;
  margin-right: 2px;
}
.van-swipe-item {
  height: 320px;
}
.van-swipe-item img {
  width: 100%;
}

.shopdetail {
  padding: 20px;
}
.table {
  border-collapse: collapse;
  border-spacing: 0;
  position: relative;
  width: 100%;
}

.table tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.table > tr > td {
  width: 25%;
  height: 34px;
  border: 1px solid #eee;
  padding: 0 0 0 10px;
  color: #666;
  font-size: 12px;
  word-break: break-word;
  line-height: 34px;
}
.comment {
  padding-left: 20px;
  margin-bottom: 60px;
}
.commentbox {
  display: flex;
  width: 94%;
  padding: 5px 0;
}
.commentbox > img {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  vertical-align: middle;
}
.commentbox .pltimg {
  width: 40px;
  height: 40px;
  margin-right: 3px;
}
.commentbox h2 {
  line-height: 24px;
  font-size: 12px;
}
.commentbox p {
  margin: 2px 0;
  font-size: 12px;
  color: rgb(66, 61, 61);
}
.commentbox span {
  font-size: 12px;
  color: rgb(146, 146, 146);
}
.addcart img {
  width: 100%;
  margin-top: -30px;
}
.addcart p {
  height: 70px;
  margin: 10px 15px;
  font-size: 14px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.addcart div {
  height: 200px;
  overflow: hidden;
}
</style>