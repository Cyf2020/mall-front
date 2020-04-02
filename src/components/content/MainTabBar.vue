<template>
  <tab-bar>
    <tab-bar-item :path="'/home'">
      <i class="fa fa-home" aria-hidden="true" slot="item-icon"/>
      <i class="fa fa-refresh" aria-hidden="true" slot="item-icon-active"></i>
      <div slot="item-title">首页</div>
    </tab-bar-item>
    <tab-bar-item :path="'/category'">
      <i class="fa fa-list-ul" aria-hidden="true" slot="item-icon"/>
      <i class="fa fa-list-ol" aria-hidden="true" slot="item-icon-active"/>
      <div slot="item-title">分类</div>
    </tab-bar-item>
    <tab-bar-item :path="'/cart'">
      <i class="fa fa-shopping-cart" aria-hidden="true" slot="item-icon"></i>
      <i class="fa fa-cart-arrow-down" aria-hidden="true" slot="item-icon-active"></i>
      <div slot="item-title">购物车</div>
    </tab-bar-item>
    <tab-bar-item :path="'/profile'">
      <i class="fa fa-user" aria-hidden="true" slot="item-icon"/>
      <i class="fa fa-heart" aria-hidden="true" slot="item-icon-active"></i>
      <div slot="item-title">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../common/tab-bar/tab-bar.vue";
  import TabBarItem from "../common/tab-bar/tab-bar-item.vue";

  export default {
    name: "MainTabBar",
    components: {
      TabBar, TabBarItem
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
