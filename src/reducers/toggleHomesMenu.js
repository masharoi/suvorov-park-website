import {TOGGLE_MENU} from "../constants";
const initialState = 1;
const menuOptions = [1, 2, 3, 4, 5 ,6];


export function toggleHomesMenu(state=initialState, action) {

         switch (action.type) {
             case TOGGLE_MENU:
                     return action.id;

             default:  return state
         }
     }
