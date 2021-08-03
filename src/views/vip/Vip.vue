<template>
  <div id="vip">
 <van-overlay show>
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</van-overlay>
  </div>
</template>
<script>
export default {
props:[],
components:{
},
  name: "",
  data () {
   return {}
  },
//方法 函数写这里
   methods:{},
}
</script>
<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background: url("https://z3.ax1x.com/2021/08/03/finWad.jpg") no-repeat;
    background-size: 100%;
  }
</style>