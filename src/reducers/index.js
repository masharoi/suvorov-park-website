import { combineReducers } from 'redux';
import {toggleMenu} from "./toggleMenu";
import {toggleHomesMenu} from "./toggleHomesMenu";

export default combineReducers({
   menuOptions: toggleMenu,
   homesMenuOptions: toggleHomesMenu
})
