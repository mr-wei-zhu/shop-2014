<template>
  <div id="users">
    <Navbar id="navbar">
      <template v-slot:title>购物街</template>
    </Navbar>
    <!-- 登录注册 -->
    <div class="UserHead">
      <!-- 头像 -->
      <div class="via">
        <img src="~assets/img/user/enter.svg" alt="头像" />
      </div>
      <!-- 登录注册按钮 -->
      <div class="phone">
        <div class="phoneup">
          <span class="login" @click="login">{{usermane}}</span>
         
        </div>
        <div class="phonedowm">
          <img src="~assets/img/user/phone.svg" alt="手机" />
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <!-- 钱包 -->
    <section class="account">
      <div class="account-item">
        <div class="number"><span class="balance">0.00</span>元</div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>个</div>
        <div class="account-info">我的优惠券</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>分</div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <!-- 列表 -->
    <div class="userlistbox">
      <van-list class="userlist" @click="info">
        <img src="~assets/img/user/xiaoxi.svg" alt="" />
        <span>我的消息</span>
      </van-list>
      <van-list class="userlist" @click="shop">
        <img src="~assets/img/user/shangcheng.svg" alt="" />
        <span>积分商城</span>
      </van-list>
      <van-list class="userlist" @click="vip">
        <img src="~assets/img/user/huiyuan.svg" alt="" />
        <span>开通会员</span>
      </van-list>

       <div class="set" @click="set"> 
        <div class="setIn">
            <img src="~assets/img/user/shezhi.svg" alt="">
            <span>设置</span>
        </div>
        <div class="setIn">
            <img src="~assets/img/user/guanyu.svg" alt="">
            <span>关于</span>
        </div>
    </div>
    </div>
    <tabbar></tabbar>

  </div>
</template>

<script>

import Navbar from "../common/Navtbar/Navtbar.vue";
import Tabbar from '../common/Tabbar/tabbar.vue';
export default {
  props: [],
  components: { Navbar, Tabbar },
  name: "",
  data() {
    return {
      list: [],
      usermane:'登录'
    };
  },

 
  //方法 函数写这里
  methods: {
    login() {
      this.$router.push("/login");
    },
    sigin(){
      this.$router.push("/sigin");
    },
    info(){
      this.$router.push("/info")
    },
    set(){
this.$router.push('/set')
    },
    shop(){
      this.$router.push('/shop')
    },
    vip(){
      this.$router.push('vip')
    }
  },

  // 登录 name
  //    created() {
 
  //   this.usermane = this.$route.query.uaermane;

  // },
};
</script>


<style scoped>
#navbar {
  background: pink;
}
.UserHead {
  height: 77px;
  background: #ff8198;
  padding: 7px 0 14px 7px;
  display: flex;
  align-content: center;
  /* justify-content: center; */
}
.via img {
  width: 100%;
  height: 100%;
}
.phone {
  color: #fff;
  padding-left: 14px;
  padding-top: 12px;
  font-size: 15px;
}

.phone img {
width: 22px;
height: 24px;
vertical-align: bottom;
}
.phonedowm {
  padding-top: 4px;
}
.phone{
  text-align: center;
}

.profileTop {
  background-color: #ff8198;
  color: #fff;

  box-shadow: 0 2px 1px rgba(100, 100, 100, 0.05);
}

.account {
  display: flex;
  padding: 8px 0 0 0;
}

.account :last-child {
  border-right: solid 1px #fff;
}

.account-item {
  width: 100%;
  background-color: #fff;
  text-align: center;
  font-size: .18667rem;
  padding: 20px;
  border-right: solid 1px #f2f2f2;
  color: #666;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}

/* 列表 */
.userlistbox {
  padding: 8px 5px 0 5px;
  border-top: solid 5px #f2f2f2;
  /* margin-top: 3px; */
}
.userlist {
  background: #fff;
  border-bottom: 2px solid rgb(248, 248, 248);
  padding: 0 5px 4px 10px;
}
.userlistbox img {
  width: 8%;
  height: 8%;
  margin-top: 15px;
}
.userlist span {
  position: absolute;
  margin: 17px 0 0 20px;
  color: rgb(100, 0, 92);
  font-weight: 900;
}
.set {
        margin-top: 16px;
    }
    .setIn {
        position: relative;
        padding: 0 5px 2px 10px;
        border-bottom: solid 2px #f2f2f2;
    }
    .setIn span{
        position: absolute;
        margin: 20px 0 0 20px;
    }
</style>