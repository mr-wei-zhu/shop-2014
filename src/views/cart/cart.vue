<template>
  <div id="cart">
    <div class="cartbody">
      <Navbar id="navbar">
        <template v-slot:title>购物街</template>
      </Navbar>

      <!-- 购物车中心部分 -->
      <div class="cartLi" v-for="item in arr" :key="item.id">
        <div class="shopcheck">
          <!-- 店铺按钮 -->
          <van-checkbox
            class="cart-checkboox2"
            v-model="item.checked"
            @click="checkShop(item)"
          ></van-checkbox>

          <div class="shopInfo">
            <van-icon name="shop-o" size="20" />
            <span>{{ shopname }}</span>
          </div>
        </div>

        <!-- 单个商品 -->
        <van-swipe-cell
          class="cartkist"
          v-for="(item2, index2) in item.productList"
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
          <!-- 商品按钮 -->
          <van-checkbox
            class="cart-checkboox"
            v-model="item2.isChecked"
            @click="ischeck(item, item2)"
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
    <van-submit-bar
      :price="3050"
      button-text="结算"
      @submit="onSubmit"
      placeholder
    >
      <van-checkbox v-model="isCheckAll" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
    <tabbar class="table"></tabbar>
  </div>
</template>
<script>
import Navbar from "views/common/Navtbar/Navtbar.vue";
import Tabbar from "../common/Tabbar/tabbar.vue";

import mitt from "mitt";
import axios from 'axios';
const emitter = mitt();
export default {
  props: [],
  components: { Navbar, Tabbar },
  name: "",
  data() {
    return {
      // money: "99",
      // 数据
      arr: [
        {
          id: 1,
          shopname: "AAA", //  店铺名
          checked: false, // 商店选择的状态
          checkedCount: 0, // 此商店被选择的商品数量
          productList: [
            {
              isChecked: false, // 商品选择状态
              title: "2019款macbook/苹果/MF893/A国航笔记本", // 产品名
              desc: "15寸/2.3/8G/256/土豪金/标准套餐",
              price: 10200, // 价格
              num: 1, // 数量
            },
            {
              isChecked: false, // 商品选择状态
              title: "2019款macbook/苹果/MF893/A国航笔记本", // 产品名
              desc: "15寸/2.3/8G/256/土豪金/标准套餐",
              price: 10200, // 价格
              num: 1, // 数量
            },
          ],
        },
      ],

      isCheckAll: false, // 是否全选
      allPrice: 0, // 所有价格
      allShops: 0, // 被选中的商店数量
      allCount: 0, // 被选中的产品数量
    };
  },

  //方法 函数写这里
  methods: {
    //  选中单个商品
    ischeck(item, item2) {
      // console.log(item2.isChecked);
      console.log(item.productList);

      let OK = item.productList.every((item) => {
        console.log(item.isChecked);
        return item.isChecked == "ture";
      });
      // console.log(OK);
    },

    // 修改单个商品的true
    _checkTrue(item, item2) {
      if (item.checkedCount == item.productList.length) {
        item.checked = true;
      } else {
        return "";
      }
      if (item.checked) {
        if (++this.allShops === this.cartInfoList.length) {
          this.isCheckAll = true;
        } else {
          this.isCheckAll = false;
        }
      } else {
        return "";
      }
    },
    // 修改单个商品的 false
    _checkFalse(item, item2) {
      item2.isChecked = false;
      --item.checkedCount;
      if (item.checked) {
        // 如果店铺是被选中的，更改店铺选中状态
        item.checked = false;
        --this.allShops; // 商店数减一
      }

      // 全选状态为false
      this.isCheckAll = false;
    },

    // 选择整个商店的商品
    checkShop(item) {
      item.checked ? this._shopTrue(item) : this._shopFalse(item);
    },
    // 遍历商店每个商品,状态为false的改变为true,又在_checkTrue()方法中将商店状态改为true
    _shopTrue(item) {
      item.productList.forEach((pro) => {
        if (pro.isChecked === false) {
          this._checkTrue(item, pro);
        } else {
          return "";
        }
        pro.isChecked === false ? this._checkTrue(item, pro) : "";
      });
    },
    _shopFalse(item) {
      item.productList.forEach((pro) => {
        // 同上
        if (pro.isChecked === true) {
          this._checkFalse(item, pro);
        } else {
          return "";
        }
      });
    },
  },

  watch: {
    arr: {
      deep: true,
      immediate: true,
      handler(val, oldval) {
        // console.log(666666666666);
      },
    },
    addgood(goods) {},
    
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#cart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#cart .carthead {
  height: 76px;
  width: 100%;
  /* display: flex; */
}

.cartbody {
  /* padding: 0 7px; */
  /* height:calc(100% - 150px); */
  /* width: 100%; */
  /* height: 100%; */
  /* display: flex;
  flex-direction: column; */
  overflow-y: scroll;
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
.cartLi {
  background: #fff;
  margin-bottom: 7px;
  border-radius: 17px;
  overflow-y: scroll;
}
.van-submit-bar {
  margin-bottom: 50px;
}

.table {
  /* height: 84px; */
  margin-top: 50px;
}
</style>