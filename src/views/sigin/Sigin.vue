<template>
  <div id="sigin">
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
      <div style="margin: 16px">
        <van-button
          round
          block
          type="default"
          native-type="submit"
          class="siginput"
          @click="sigin"
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
    sigin() {
      axios({
        method: "post",
        url: "/api/addAction",
        params: this.siginForm,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
#sigin {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: url("https://z3.ax1x.com/2021/08/02/fCwEjJ.jpg") no-repeat;
  background-size: 100% 100%;
}
.siginuser {
  margin-top: 140px;
  opacity: 0.5;
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
</style>