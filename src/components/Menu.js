import React from "react";
import "../css/Menu.css";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {toggle_menu} from "../actions";
import {store} from '../index';

function Menu(props) {

  return (
    <section class="menu row">
      <div class="side-bar col-4">
        {props.sideBarItems.map((item, i) =>
          <Link
            id={i}
            onClick={()=>{store.dispatch(toggle_menu(item.id))}}
            className={props.menuId == item.id ? "item-active" : "item-caption"}
            to={item.link}
          > {item.title}</Link>
        )}
      </div>
      <div class="menu-content col-8">{props.content}</div>
    </section>
  );
}


function mapStateToProps(state) {
    return {menuId:state.menuOptions}
}

export default connect(mapStateToProps)(Menu);
