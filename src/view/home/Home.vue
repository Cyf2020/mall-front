<template>
  <div id="home">
    <nav-bar><div slot="center" class="nav-title">首页</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommend="recommend"></home-recommend-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./child/HomeSwiper";
  import HomeRecommendView from "./child/HomeRecommendView";

  import {getHomeData} from "../../network/home.js";

  export default {
    name: "Home",
    components: {NavBar,HomeSwiper,HomeRecommendView},
    data(){
      return {
        banner: [],
        recommend: [],
      }
    },
    created() {
      getHomeData().then(res=>{
        console.log(res.data)
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .nav-title{
    text-align: center;
    font-weight: bold;
  }
</style>
