<template>
  <div class="nav-bar">
    <div class="left" :style="getStyle()">
      <slot name="left"></slot>
    </div>
    <div class="center" :style="getStyle()">
      <slot name="center"></slot>
    </div>
    <div class="right" :style="getStyle()">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    methods: {
      getStyle() {
        const theme = this.$store.getters.getCurrentTheme();
        return {backgroundColor: theme.navColor, color: theme.color}
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
