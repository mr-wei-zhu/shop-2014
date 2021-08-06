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
        :rules="[
          { required: true, message: '请输入正确内容' },
          { tigger: 'blur' },
          { validator, message: '长度为4~12位' },
        ]"
      />
      <van-field
        v-model="siginForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请输入正确内容' },
          { tigger: 'blur' },{pattern,message:'长度为6~14位'}
        ]"
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
      //验证密码用的
      pattern:/\w{6,14}/    
    };
  },

  methods: {
    // 验证用户名字规则
    validator(val) {
      //验证用户名用的函数

      return /\S{4,12}/.test(val);
    },
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
         this.$router.push("/login");
      });
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