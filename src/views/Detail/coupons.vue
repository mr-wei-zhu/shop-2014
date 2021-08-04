<template>
  <van-coupon-cell
    :coupons="state.coupons"
    :chosen-coupon="state.chosenCoupon"
    @click="state.showList = true"
  />
  <!-- 优惠券列表 -->
  <van-popup
    v-model="state.showList"
    round
    position="bottom"
    style="height: 90%; padding-top: 4px"
  >
    <van-coupon-list
      :coupons="state.coupons"
      :chosen-coupon="state.chosenCoupon"
      :disabled-coupons="disabledCoupons"
      @change="onChange"
      @exchange="onExchange"
    />
  </van-popup>
</template>
<script>
import { reactive } from "vue";

const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

export default {
  setup() {
    const state = reactive({
      coupons: [coupon],
      showList: false,
      chosenCoupon: -1,
    });

    const onChange = (index) => {
      console.log(11);
      state.showList = false;
      state.chosenCoupon = index;
    };
    const onExchange = (code) => {
      console.log(11);

      state.coupons.push(coupon);
    };

    return {
      state,
      onChange,
      onExchange,
      disabledCoupons: [coupon],
    };
  },
  methods:{
    //   state() {
    //       console.log(111);
    //     this.state.showList = true
    //     console.log(this.state.showList);
    //   }
  }
};
</script>
<style  scoped>
</style>