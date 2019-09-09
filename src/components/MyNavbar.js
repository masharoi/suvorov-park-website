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

import logo from "../images/Ellipse.png";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navClass: "initial-nav-style", isLoggedIn: false};
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.pageYOffset == 0) {
      this.setState({ navClass: "initial-nav-style" });
    } else {
      this.setState({ navClass: "scrolled-nav-style" });
    }
  }

  handleLogIn = () => {
    window.location = "/log-in"
  }


  render() {
    {if (!window.localStorage.getItem("isLoggedIn") == true) {
      window.localStorage.setItem("isLoggedIn", false);
    }
  }

    const loggedInNav =   <ScrollspyNav
        scrollTargetIds={[
          "services",
          "all-news",
          "vote",
          "forum",
          "footer"
        ]}
        activeNavClass="is-active"
        scrollDuration="1000"
      >
        <ul id="nav-list"
        >
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

    const loggedOutNav =  <Nav className="ml-auto">
      <Nav.Link onClick={this.handleLogIn} className="nav-link" href="/log-in">Личный кабинет</Nav.Link>
    </Nav>
    return (

      <section>
        <Navbar id="my-navbar" expand="md" className={this.state.navClass}>
        <Navbar.Toggle  id="nav-toggle"/>
          <Navbar.Collapse id="my-nav">
            <Navbar.Brand id="nav-brand" href="/home" className="mr-auto">
              <img id="logo" src={logo} alt="Logo" />
            </Navbar.Brand>
            {window.localStorage.getItem("isLoggedIn")==true || window.localStorage.getItem("isLoggedIn")=="true" ? loggedInNav : loggedOutNav}
          </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
}

export default MyNavbar;
