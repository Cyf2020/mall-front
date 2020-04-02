<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div id="item-icon">
      <div :style="getStyle()" v-show="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div :style="getStyle()" v-show="isActive">
        <slot name="item-icon-active"></slot>
      </div>
    </div>
    <div :style="getStyle()" id="item-title">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
  import getters from "../../../store/getters";
  import state from "../../../store";

  export default {
    name: "tabBarItem",
    props: {
      path: String,
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      },
      getStyle() {
        let currentColorMode = this.$store.getters.getCurrentTheme();
        return this.isActive ? {
          backgroundColor: currentColorMode.backgroundColor,
          color: currentColorMode.activeColor,
        } : {backgroundColor: currentColorMode.backgroundColor, color: currentColorMode.color};
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.path);
      },
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";

  /*
    .tab-bar-item:修饰bar内单个元素，图标+文字的组合
    #item-title:文字的基本属性
    .tab-bar-item i：图标的基本属性
    .active:动态绑定，修饰选中后的标签，附加或覆盖在基本属性上
  */
  .tab-bar-item {
    /*令弹性框内的元素均等分布*/
    flex: 1;
    /*一般的tab-bar都是49px*/
    height: 49px;
    /*文字居中*/
    text-align: center;
  }

  /*
      todo: 这里因为无法直接在slot上面绑定class，故增加一层div
  */
  #item-title {
    font-size: 12px;
    position: center;
  }

  #item-icon {
    font-size: 25px;
  }

</style>
