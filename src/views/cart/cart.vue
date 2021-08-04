<template>
  <div id="cart">
    <!-- 头部 -->
    <navtbar id="navbar">
      <template v-slot:title>购物车</template>
    </navtbar>
    <div class="carthead">
      <div class="cart-head-up">
        <strong>购物车</strong><span @click="Regulate">管理</span>
      </div>
      <div class="cart-head-dowm">
        <p>共{{ number }}件宝贝</p>
      </div>
    </div>
    <!-- 购物车中心部分 -->
    <van-swipe-cell class="cartkist">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell class="cartkist">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell class="cartkist">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell class="cartkist">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell class="cartkist">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <!-- 结算 -->
    <div class="pay">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <div class="pay-number">
        <p>
          合计：<span>￥{{ money }}</span>
        </p>
        <van-button round type="info" color="#FF8040" class="pay-buttom"
          >结算({{ number }})</van-button
        >
      </div>
    </div>
    <tabbar></tabbar>
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
      checked: true,
      money: "99",
    };
  },
  //方法 函数写这里
  methods: {
    Regulate() {
      console.log(1);
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#cart {
  width: 100vw;
  height: 90vh;
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
  padding-top: 14px;
  font-size: 14px;
  color: rgb(92, 89, 89);
  padding-bottom: 22px;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.cartkist {
  border-radius: 17px;
  margin-bottom: 12px;
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
  justify-content: space-between;
  position: fixed;
  bottom: 49px;
  background: #fff;
}
.pay-number {
  display: flex;
}
.pay-number p {
  line-height: 46px;
  padding-right: 6px;
}
.pay-buttom {
  width: 107px;
}
</style>