import Vue from "vue";
export default {
  changeColorMode(state){
    const nextModeIndex=(state.colorMode[0].selectIndex+1)%state.colorMode[0].modeArray.length;
    Vue.set(state.colorMode[0],'selectIndex',nextModeIndex);
  },
}
