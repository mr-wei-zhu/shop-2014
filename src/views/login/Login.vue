<template>
  <div id="login">
    <van-form @submit="onSubmit" class="loginuser"
    :rules="loginFormrules"
    :v-model="loginFrom"
    >
      <van-field
        v-model="loginForm.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        
      />
      <van-field
        v-model="lohinForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="default" native-type="submit" class="loginput"
          >提交</van-button
        >
      </div>
      <p>没有账户？快来注册吧</p>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style >
body{
    background-image: url('https://z3.ax1x.com/2021/08/02/fCP3yq.gif') ;
}
.loginuser{
    margin-top: 140px;
}
.loginput{
    color: #fff;
    background: rgb(44, 94, 233);
}
p{
    font-size: 12px;
    color: rgb(175, 175, 175);
    text-align: center;
}
</style>