<template>
  <swiper>
    <swiper-item v-for="item in this.banner">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper/index";
  export default {
    name: "HomeSwiper",
    components: {SwiperItem,Swiper},
    props: {
      banner: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>
