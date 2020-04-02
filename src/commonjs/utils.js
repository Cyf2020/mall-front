import state from "../store/index";
import getters from "../store/getters";

let themeOfTabBar = function (isActive) {
  console.log(isActive)

};

let themeOfBar = function () {
  let currentColorMode = getters.getCurrentTheme(state.state);
  return {backgroundColor: currentColorMode().backgroundColor, color: currentColorMode().color}
};

export {themeOfTabBar, themeOfBar}
