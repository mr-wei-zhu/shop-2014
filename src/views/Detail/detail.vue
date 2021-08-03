<template>
  <div>
    <h1>详情页</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: [],
  components: {},
  name: "",
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getDetails(this.id);
  },
  //方法 函数写这里
  methods: {
    async getDetails(id) {
      await axios
        .get(`http://152.136.185.210:7878/api/m5/detail?iid=${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  //计算属性
  computed: {},
};
</script>
<style  scoped>
</style>