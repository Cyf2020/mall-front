<template>
  <div id="app" :style="getStyle()">
    <router-view></router-view>
    <button @click="changeColorMode()">模式切换</button>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar,
  },
  methods: {
    changeColorMode(){
      this.$store.commit('changeColorMode');
    },
    getStyle() {
      let theme=this.$store.getters.getCurrentTheme();
      return {backgroundColor: theme.backgroundColor, color: theme.color}
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
