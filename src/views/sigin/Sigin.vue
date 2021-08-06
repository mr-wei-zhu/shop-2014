<template>
  <div id="sigin">
    <van-nav-bar
      class="loginhead"
      title=""
      left-text=""
      right-text=""
      left-arrow
      @click-left="gobacklogin"
    />
    <van-form
      @submit="onSubmit"
      class="siginuser"
      :rules="siginFormRules"
      :model="siginForm"
      ref="siginFormRef"
    >
      <van-field
        v-model="siginForm.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        v-model="siginForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <div style="margin: 16px" class="siginbuttombox">
        <van-button
          round
          block
          type="default"
          native-type="submit"
          class="siginput"
          @click="sigin"
          color="#f391a9"
          >注册</van-button
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
      siginForm: {
        username: "",
        password: "",
      },
      // 验证规则
      siginFormRules: {
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
    onsubmit(values) {
      console.log(1);
    },
    // 头部导航返回键
    gobacklogin() {
      console.log(1);
      this.$router.push("/login");
    },
    sigin() {
      // this.$refs.siginFormRef.value(async (val) => {
      //   if (!val) return;
      console.log(this.siginForm);
      axios({
        method: "post",
        url: "/api/addAction",
        params: this.siginForm,
      }).then((res) => {
        console.log(res);
      });

      // this.$http.sigin(this.siginForm, (res) => {
      //   if (res.meat.status != 200) {
      //     Notify("注册失败");
      //     return;
      //   }
      //   Notify({ type: "primary", message: "注册成功" });
      //   window.sessionStorage.setItem("token", res.data.token);
      
  
      this.$router.push({
        name:'login',
        query:{ username:this.siginForm.username}
      });

      // });
      // });
    },
  },
};
</script>

<style>
.siginuser {
  margin-top: 140px;
}
.siginput {
  color: #fff;
  background: rgb(44, 94, 233);
}
p {
  font-size: 12px;
  color: rgb(175, 175, 175);
  text-align: center;
}
.van-cell {
  margin-top: 10px;
}
.siginbuttombox {
  position: relative;
}
.siginput {
  color: #fff;
  background: rgb(44, 94, 233);
  width: 60%;
  position: absolute;
  left: 20%;
}
</style>