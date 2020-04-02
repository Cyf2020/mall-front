<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommend: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 15px;
    border-bottom: #66666670 solid 8px;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img{
    width: 70px;
    height: 70px;
  }

</style>
