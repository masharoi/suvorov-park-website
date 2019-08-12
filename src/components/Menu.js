import React from "react";
import "../css/Menu.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggle_menu } from "../actions";
import { store } from "../index";
import Button from "react-bootstrap/Button";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="menu row">
        <div class="side-bar col-4">
          {this.props.sideBarItems.map((item, i) => (
            <Link
              id={i}
              className = {
                this.props.selectedLink == item.id ? "item-active" : "item-caption"
              }
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div class="menu-content col-8">{this.props.content}</div>
      </section>
    );
  }
}

export default Menu;
