<template>
  <div id="tab-bar" :style="getStyle()">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from "./tab-bar-item";
  export default {
    name: "tabBar",
    components: {TabBarItem},
    methods: {
      getStyle(){
        let currentColorMode = this.$store.getters.getCurrentTheme();
        return {
          backgroundColor: currentColorMode.backgroundColor,
        }
      }
    }
  }
</script>
borderTop: ;
<style scoped>
  /*
    #tab-bar:整个bar
  */
  #tab-bar {
    /*弹性框*/
    display: flex;
    text-align: center;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
