import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

import logo from '../images/Ellipse.png';


class MyNavbar extends React.Component {
  constructor(props) {
  super(props);
  this.state = {'navClass': 'initial-nav-style'};
  this.handleScroll = this.handleScroll.bind(this);
}
componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
};

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
};

handleScroll(event) {
  if (window.pageYOffset==0) {
    this.setState({'navClass': 'initial-nav-style'})
  } else {
    this.setState({'navClass': 'scrolled-nav-style'})
  }

};
  render() {
    return(
      <section>
        <Navbar  id="my-navbar" expand="lg" className={this.state.navClass}>
          <Navbar.Collapse id="my-nav">
          <Navbar.Brand href="/" className="mr-auto">
            <img id="logo" src={logo}  alt="Logo" />
          </Navbar.Brand>

            <Nav className="ml-auto" >
              <Nav.Item>
                <Nav.Link href="profile#services">Услуги</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="profile#all-news">Новости</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="profile#vote">Голосование</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="profile#forum">Форум</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="profile#footer">Контакты</Nav.Link>
              </Nav.Item>

            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
}

export default MyNavbar;
