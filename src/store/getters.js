/*
    todo: 要传入一个state
*/
export default {
  getCurrentTheme(state){
    const mode=state.colorMode[state.colorMode[0].selectIndex+1];
    return ()=>{return mode}
  }
}
