<template>
  <div id="set">
    <div class="setin">
      <div class="sethead">
        <van-cell title="编辑资料" is-link class="grid" />
        <van-cell title="隐私设置" is-link class="grid" />
      </div>
      <div class="setbody">
        <van-cell title="清除缓存" value="" class="grid" />
        <van-cell title="字体大小" value="中" class="grid" />
        <van-cell title="非WiFi网络流量" value="内容" class="grid" />
        <van-cell
          title="非WiFi网络流量播放提醒"
          value="提醒一次"
          class="grid"
        />
        <van-cell title="推送通知" value="" class="grid" />
      </div>

      <div class="setfoot">
        <van-cell title="广告设置" is-link class="grid grid2" />
        <van-cell title="关于我们" is-link class="grid" />
      </div>

      <div id="grid3" @click="uplogin">
        <p>退出登录</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  name: "",
  data() {
    return {};
  },
  //方法 函数写这里
  methods: {
    uplogin() {
      window.sessionStorage.removeItem("token");

      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
#grid3 {
  height: 48px;
  line-height: 48px;
  background: #fff;
  margin-top: 30px;
  text-align: center;
  color: red;
}
#set {
  width: 100vw;
  height: 100vh;
  background: rgb(243, 243, 243);
}
.grid2 {
  margin-bottom: 10px;
}
.grid {
  height: 48px;
  display: flex;
  align-content: center;
}
.sethead {
  margin: 10px 0;
}

.setbody {
  margin-bottom: 15px;
}
</style>