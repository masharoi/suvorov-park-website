import {TOGGLE_MENU} from "../constants/index";

export function toggle_menu(id) {
    return {type:TOGGLE_MENU,
            id: id}
}
