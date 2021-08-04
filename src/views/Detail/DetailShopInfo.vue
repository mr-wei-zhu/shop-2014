<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-name-info">
      <img :src="shop.shopLogo" alt="" class="shop-img" />
      <div>{{ shop.name }}</div>
    </div>
    <div class="shop-other-info">
      <div class="shop-other-item shop-other-sell">
        <div>
          <p class="f16">{{ saveNum }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="f16">{{ shop.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-item shop-other-right">
        <div v-for="item in shop.score" :key="item.id">
          {{ item.name }}&ensp;：
          <span class="score" :class="{ active: item.isBetter }">{{
            item.score
          }}</span>
          <span class="score-bg" :class="{ active: item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  updated() {
    console.log(this.shop);
  },
  computed: {
    saveNum() {
      if (this.shop.cSells < 10000) return this.shop.cSells;
      return (this.shop.cSells / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style  scoped>
.f16 {
  font-size: 16px;
}

.shop-name-info {
  align-items: center;
  margin: 20px 10px;
  display: flex;
}

.shop-img {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  vertical-align: middle;
}

.shop-other-info {
  font-size: 12px;
  align-items: center;
  line-height: 22px;
  display: flex;
}

.shop-other-item {
  flex: 1;
}
.shop-other-item div{
  margin: 3px 0;
}
.shop-other-sell {
  display: flex;
  border-right: 1px solid #ececec;
}
.shop-other-sell div {
  flex: 1;
  text-align: center;
}
.shop-other-right {
  padding-left: 20px;
}
.shop-other-right .score {
  display: inline-block;
  width: 25px;
  color: #006666;
  text-align: center;
  margin-right: 20px;
}
.shop-other-right .score .active {
  /* color: #880000; */
}
.score-bg {
  background-color: #006666;
  color: #fff;
  padding: 1px 4px;
  font-size: 12px;
}
.enter-shop-wrap {
  text-align: center;
}
.active {
  background: red;
  color: #fff  !important;
}
.enter-shop {
  display: inline-block;
  background-color: #f2f2f2;
  font-size: 12px;
  padding: 6px 30px;
  border-radius: 100px;
  margin: 10px;
}
</style>
