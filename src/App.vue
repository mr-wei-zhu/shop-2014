<template>
  <div id="app">
    <router-view #default="{ Component }">
      <keep-alive exclude="detail">
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
</style>
