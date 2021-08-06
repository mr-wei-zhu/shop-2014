<template>
  <div id="login">
    <van-nav-bar
    class="loginhead"
      title=""
      left-text=""
      right-text="注册"
      left-arrow
      @click-left="goback"
      @click-right="sigin"
    />
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
         :rules="[{ required:true, message: '请输入正确内容' },{tigger:'blur'}]"
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required:true, message: '请输入正确内容' },{tigger:'blur'}]"
      />
      <div style="margin: 16px" class="buttombox">
        <van-button
          round
          block
          type="default"
          native-type="submit"
          class="loginput"
          color="#f391a9"
          @click="login"
          >登录</van-button
        >
      </div>
    </van-form>
  
  </div>
</template>
<script>
import axios from "axios";

export default {

  data() {
    return {
   

      // 默认值
      loginForm: {
        username: "1111",
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
    login() {
      // this.$refs.loginFormRef.validate(async (val) => {
      //   if (!val) return;
      axios({
        method: "post",
        url: "/api/login",
        params: this.loginForm,
      }).then((res) => {
        console.log(res);
        // if (res.data.Status != 200) {
         
        // }
        // Notify({ type: "primary", message: "登录成功" });

        window.sessionStorage.setItem("token", res.data.data[0]._id);
        this.$router.push("/home");
        
        //   });
      });
    },
    sigin() {
      this.$router.push("/sigin");
    },
       // 头部导航
      goback() {
        console.log(1);
          this.$router.push("/users");
      },
     
  },
};
</script>

<style scoped>
#login {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: url("https://z3.ax1x.com/2021/08/04/fEqUK0.jpg") no-repeat;
  background-size: 100% 100%;
}
.van-nav-bar__text{
  color: #111 !important;
}
.loginhead{
  color: #111;
}
.loginuser {
  margin-top: 140px;
  /* opacity:0.5; */
}
.buttombox {
  position: relative;
}
.loginput {
  color: #fff;
  background: rgb(44, 94, 233);
  width: 60%;
  position: absolute;
  left: 20%;
}

.van-cell {
  margin-top: 10px;
}

</style>