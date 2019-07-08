import React from "react";
import "../css/Menu.css";
import { Link } from "react-router-dom";

function Menu(props) {
  function handleClick(e) {
    e.preventDefault();
    e.target.style.color = "red";
    
  }
    return (
      <section class="menu row">
      <div class="side-bar col-4">
      {props.sideBarItems.map(function(item) {
        return (
          <Link onClick={handleClick} class="item-caption" to={item.link}>
            {item.title}
          </Link>
        );
      })}
      </div>
      <div class="menu-content col-8">
      {props.content}
      </div>
      </section>
    );
}

export default Menu;
