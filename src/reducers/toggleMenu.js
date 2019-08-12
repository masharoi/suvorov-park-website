import { TOGGLE_MENU } from "../constants";
var initialState = 1;
const menuOptions = [1, 2, 3];

export function toggleMenu(state = initialState, action) {
  console.log("db updated " + action.type + " " + initialState);

  switch (action.type) {
    case TOGGLE_MENU:
      return action.id;

    default:
      return state;
  }
}
