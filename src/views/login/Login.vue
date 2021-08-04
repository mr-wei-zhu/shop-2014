<template>
  <div id="login">
    <van-form
      @submit="onSubmit"
      class="loginuser"
      :rules="loginFormRules"
      :model="loginForm"
      ref="loginFormRef"
    >
      <van-field
        v-model="loginForm.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="default"
          native-type="submit"
          class="loginput"
          @click="login"
          >登录</van-button
        >
      </div>
    </van-form>
    <p @click="sigin">没有账户？快来注册吧</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 默认值
      loginForm: {
        username: "迪迪",
        password: "123456",
      },
      // 验证规则
       loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    login(){
      this.$refs.loginFormRef.values(async(val)=>{
        if(!val)return;
        this.$http.login(this.loginForm,(res)=>{
          if(res.meat.status != 200){
          Notify('登录失败');
          return;
          }
          Notify({ type: 'primary', message: '登录成功' });
          window.sessionStorage.setItem('token',res.data.token);
          this.$router.push("/home");
        })
      })
    },
    sigin(){
      this.$router.push("/sigin")
    }
  },
};
</script>
<style >

#login {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: url("https://z3.ax1x.com/2021/08/02/fCP3yq.gif") no-repeat;
  background-size: 100% 100%;
}
.loginuser {
  margin-top: 140px;
  opacity:0.5;
}
.loginput {
  color: #fff;
  background: rgb(44, 94, 233);
}
p {
  font-size: 12px;
  color: rgb(175, 175, 175);
  text-align: center;
}
.van-cell{
  margin-top: 10px;
}

</style>