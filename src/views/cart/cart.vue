<template>
  <div id="cart">
    <div class="body">
      <!-- 头部 -->
      <div class="carthead">
        <div class="cart-head-up">
          <strong>购物车</strong><span @click="Regulate">管理</span>
        </div>
        <div class="cart-head-dowm">
          <p>共{{ number }}件宝贝</p>
        </div>
      </div>

      <!-- 购物车中心部分 -->
      <div class="cartUl" v-for="(item, index) in arr" :key="index">
        <div class="shopcheck">
          <!-- 按钮1 -->
          <van-checkbox
            class="cart-checkboox2"
            v-model="item.isChecked"
            @click="checkGropAll(item)"
          ></van-checkbox>

          <div class="shopInfo">
            <van-icon name="shop-o" size="20" />
            <span>{{ shopname }}</span>
          </div>
        </div>

        <!-- 商品 -->
        <van-swipe-cell
          class="cartkist"
          v-for="(item2, index2) in item.list"
          :key="index2"
        >
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
          >
          </van-card>
          <!-- 按钮2 v-model="item.result" -->
          <van-checkbox
            class="cart-checkboox"
            v-model="item.result"
            @click="checkGroup(item)"
          ></van-checkbox>

          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <!-- 结算 -->
    <!-- <div class="pay">
      <van-checkbox @click="checkAll" v-model="isCheckAll">全选</van-checkbox>
      <div class="pay-number">
        <p>
          合计：<span>￥{{ money }}</span>
        </p>
        <van-button round type="info" color="#FF8040" class="pay-buttom"
          >结算({{ number }})</van-button
        >
      </div>
    </div> -->
    <!-- <div class="kong"></div> -->
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
      placeholder
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
    <tabbar class="table"></tabbar>
  </div>
</template>
<script>
import Navtbar from "../common/Navtbar/Navtbar.vue";
import Tabbar from "../common/Tabbar/tabbar.vue";
export default {
  props: [],
  components: { Navtbar, Tabbar },
  name: "",
  data() {
    return {
      number: "99",
      money: "99",
      // 数据
      arr: [
        { isChecked: false, result: [], list: [{ title: "11" }, { B: "22" }] },
        { isChecked: false, result: [], list: [{ title: "11" }, { B: "22" }] },
        { isChecked: false, result: [], list: [{ title: "11" }, { B: "22" }] },

      ],

      // 全选款
      isCheckAll: false,
      //  店铺名
      shopname: "AAA",
    };
  },
  //方法 函数写这里
  methods: {
    // 管理
    Regulate() {
      console.log(1);
    },
    // 全選
    checkAll() {
      console.log(1);
      // this.isCheckAll=!this.isCheckAll;

      if (this.isCheckAll) {
        this.arr.forEach((item) => {
          item.result = [];
          item.isChecked = this.isCheckAll;
          item.list.forEach((j) => {
            item.result.push(j.title);
          });
        });
      } else {
        this.arr.forEach((item) => {
          item.isChecked = this.isCheckAll;
          item.list.forEach((j) => {
            item.result = [];
          });
        });
      }
    },
    // 店铺按钮
    checkGropAll(item) {
      // item.isChecked=!this.isChecked
      if (item.isChecked) {
        item.result = [];
        item.list.forEach((i) => {
          item.result.push(i.title);
        });
      } else {
        item.list.forEach((i) => {
          item.result = [];
        });
      }
      let val = this.arr.every((i) => i.isChecked);
      if (val) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
    },

    // 每个商品的按钮
    checkGroup(item) {
      if (item.result.length == item.list.length) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }
      let val = this.arr.every((item) => isChecked);
      if (val) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.carthead {
  height: 76px;
  width: 100%;
}
#cart {
  padding: 0 7px;
  /* height:calc(100% - 150px); */
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  background: rgb(243, 243, 243);
}

.number {
  height: 100px;
}
.cart-head-up {
  height: 37px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 7px;
}
strong {
  font-size: 27px;
}
.cart-head-up span {
  padding-top: 5px;
  font-size: 17px;
  font-weight: 900;
}
.cart-head-dowm {
  padding-top: 4px;
  font-size: 14px;
  color: rgb(92, 89, 89);
  padding-bottom: 9px;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.cartkist {
  background: rgba(0, 0, 0, 0);
  border-radius: 17px;
  position: relative;
}

button {
  border: 0;

  background-color: transparent;

  outline: none;
}
.pay {
  width: 100%;
  height: 46px;
  display: flex;
  /* justify-content: space-between; */
  position: fixed;
  bottom: 49px;
  background: #fff;
  padding: 0 7px;
}
.pay-number {
  display: flex;
  padding-left: 147px;
}
.pay-number p {
  line-height: 46px;
  padding-right: 6px;
}
.pay-buttom {
  width: 107px;
}
.cart-checkboox {
  position: absolute;
  left: 6px;
  top: 40%;
  z-index: 1;
}
.cart-checkboox2 {
  padding-left: 6px;
  padding-right: 7px;
  padding-top: 7px;
  z-index: 1;
}
.van-card__header {
  padding-left: 14px;
}
.goods-card {
  margin-top: 0px !important;
}
.shopcheck {
  display: flex;
}
.shopInfo {
  padding-top: 9px;
}
.cartUl {
  background: #fff;
  margin-bottom: 7px;
  border-radius: 17px;
  overflow-y: scroll;
}
.van-submit-bar {
  margin-bottom: 50px;
}

.table{
  /* height: 84px; */
  margin-top: 84px;
}
</style>