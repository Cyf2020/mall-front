import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules";
import getters from "./getters";
//1. 安装插件
Vue.use(Vuex);
//2. 创建对象
export default new Vuex.Store({
  state: {
    colorMode: [
      {
        selectIndex: 0,
        modeArray: ['default', 'night'],
      },
      {
        name: 'default',
        backgroundColor: '#ffffff',
        color: '#666',
        activeColor: '#ff5777',
        navColor: '#ff8198',
      },
      {
        name: 'night',
        backgroundColor: '#292a2e',
        color: '#3f8cb5',
        activeColor: '#ff5777',
        navColor: '#292a2e',
      }
    ]
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: modules,
});
