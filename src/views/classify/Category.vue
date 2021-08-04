<template>
  <div>
    <Navtbar id="navbar">
      <template v-slot:title>分类热卖</template>
    </Navtbar>

    <van-tree-select
      :items="items"
      v-model:active-id="activeId"
      v-model:main-active-index="items.activeId"
      @click-nav="onNavClick(items.activeId)"
    >
      <template #content>
        <ul class="right-content">
          <li>
            <van-grid clickable :column-num="3" :gutter="10">
              <van-grid-item
                :icon="item.image"
                :text="item.title"
                :url="item.link"
                :key="sort"
                v-for="(item, sort) in classifylist"
              />
            </van-grid>
          </li>
        </ul>
      </template>
    </van-tree-select>
    <tabbar></tabbar>
  </div>
</template>

<script>
import axios from "axios";
import Tabbar from "../common/Tabbar/tabbar.vue";
export default {
  data() {
    return {
      // 分类列表导航菜单
      items: [],
      // 分类数据列表
      classifylist: [],
      activeId: 3627,
    };
  },
  components: { Tabbar },
  created() {
    // 获取左侧导航菜单的数据
    this.getClassifyMenu();
    // 默认渲染"正在流行"的数据
    this.getClassifylist(3627);
  },
  methods: {
    getClassifyMenu() {
      axios.get(`http://152.136.185.210:7878/api/m5/category`).then((res) => {
        console.log(res);
        this.items = res.data.data.category.list;

        this.items.forEach((item) => {
          item.text = item.title;
          item.activeId = item.maitKey;
        });
        // console.log(this.items);
      });
    },
    onNavClick(index) {
      console.log(index);
      // const activeId = this.items[index].activeId;
      this.getClassifylist(this.items[index].activeId);
    },
    getClassifylist(activeId) {
      axios
        .get(
          `http://152.136.185.210:7878/api/m5/subcategory?maitKey=${activeId}`
        )
        .then((res) => {
          console.log(res);
          this.classifylist = res.data.data.list;
          console.log(this.classifylist);
        });
    },
  },
};
</script>

<style>
#navbar {
  background: pink;
}
.van-button {
  width: 100%;
  background-color: rgb(248, 135, 154);
  border: none;
  height: 50px;
  font-size: 18px;
}
.van-tree-select {
  height: 151vw !important;
  margin: 0;
}
.van-tree-select__nav {
  flex: none;
}

.van-sidebar-item--select::before {
  height: 13vw;
  width: 1vw;
  background-color: rgb(248, 135, 154);
}

.van-icon__image {
  width: 4em;
  height: 4em;
}
.van-grid-item__text {
  font-size: 12px;
}
.van-badge__wrapper {
  color: #000 !important;
  font-size: 14px;
}
.active {
  color: pink;
}
.van-grid-item__content--center {
  height: 105px;
}
</style>
