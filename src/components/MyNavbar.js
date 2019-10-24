import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import ScrollspyNav from "react-scrollspy-nav";

import logo from "../images/logo.svg";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIcon: "toggle-icon",
      showList: ""
    };
  }

  handleLogIn = () => {
    window.location = "/log-in";
  };

  handleToggle = () => {
    if (this.state.navIcon == "toggle-icon") {
      this.setState({ navIcon: "toggle-close-icon"});
    } else {
      this.setState({ navIcon: "toggle-icon" });
    }
  };

  render() {
    {
      if (!window.localStorage.getItem("isLoggedIn") == true) {
        window.localStorage.setItem("isLoggedIn", false);
      }
    }
    const loggedInNav = (
      <ScrollspyNav
        scrollTargetIds={["services", "all-news", "vote", "forum", "footer"]}
        activeNavClass="is-active"
        scrollDuration="400"
      >
        <ul id="nav-list" class={this.state.showList}>
          <li>
            <a class="nav-link" href="#services">
              <span>Услуги</span>
            </a>
          </li>
          <li>
            <a class="nav-link" href="#all-news">
              <span>Новости</span>
            </a>
          </li>
          <li>
            <a class="nav-link" href="#vote">
              <span>Голосование</span>
            </a>
          </li>
          <li>
            <a class="nav-link" href="#forum">
              <span>Форум</span>
            </a>
          </li>
          <li>
            <a class="nav-link" href="#footer">
              <span>Контакты</span>
            </a>
          </li>
        </ul>
      </ScrollspyNav>
    );

    const loggedOutNav = (
      <Nav className="ml-auto">
        <a
          onClick={this.handleLogIn}
          id="profile-link"
          class="nav-link"
          href="/profile"
        >
          Личный кабинет
        </a>
      </Nav>
    );

    return (
      <section>
        <Navbar
          id="my-navbar"
          expand="md"
          className="scrolled-nav-style"
          onToggle={this.handleToggle}
        >
          <Navbar.Brand id="nav-brand" href="/home">
            <img id="logo" src={logo} />
          </Navbar.Brand>
          {!this.props.isHome &&
          window.localStorage.getItem("isLoggedIn") == "true" ? (
            <div>
              <Navbar.Toggle
                bsPrefix={"toggle " + this.state.navIcon}
                id="nav-toggle"
              />
              <Navbar.Collapse id="my-nav">{loggedInNav}</Navbar.Collapse>
            </div>
          ) : (
            loggedOutNav
          )}
        </Navbar>
      </section>
    );
  }
}

export default MyNavbar;
