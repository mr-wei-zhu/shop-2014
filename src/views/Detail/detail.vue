<template>
  <div id="detail">
    <van-tabs v-model:active="active" scrollspy sticky>
      <template #nav-left id="nav_left"
        ><van-icon name="arrow-left"
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
      <van-tab title="商品参数">
        <detamain :detailInfo="detailInfo"></detamain>
      </van-tab>
      <van-tab title="选项">
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
        啊发撒发撒法<br />
      </van-tab>
      <van-tab title="选项">
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
        的发生发射点发123413<br />
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
    <!-- <van-popup
      v-model:show="show"
      closeable
      position="bottom"
      :style="{ height: '40%' }"
    >
      是否加入到购物车</van-popup
    > -->
  </div>
</template>
<script>
import { getDetail, Goods, Shop } from "../../network/detail";
import DetailBaseInfo from "./DetailBaseInfo.vue";
import DetailShopInfo from "./DetailShopInfo.vue";
import Coupons from "./coupons.vue";
import Detamain from "./Detamain.vue";
import Addcart from "./addcart.vue";

export default {
  props: [],
  components: { DetailBaseInfo, DetailShopInfo, Coupons, Detamain, Addcart },

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
      show: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    getDetail(this.id).then((res) => {
      console.log(res);
      const data = res.data.result;
      this.goodsg = res.data;
      this.detailData = data;
      //轮播图
      this.swiper = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      console.log(this.goods);
      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo;
    });
  },
  //方法 函数写这里
  methods: {
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
        console.log('没东西');
        arr.push(this.goodsg);
        window.localStorage.setItem("di", JSON.stringify(arr));
      } else {
        console.log('有东西');
        data = JSON.parse(data);
        console.log(data);
        data.push(this.goodsg)
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

.van-tab {
  font-size: 12px;
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