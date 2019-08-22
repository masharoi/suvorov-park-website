import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "../css/Navbar.css";


function MyNavbar() {
  return (
    <section>
      <Navbar id="my-navbar" expand="lg">
        <Navbar.Collapse id="my-nav">
          <Nav className="ml-auto" >
            <Navbar.Brand href="/">
              <img id="logo"  alt="Logo" />
            </Navbar.Brand>

            <Nav.Item>
              <Nav.Link href="/services">Услуги</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/vote">Голосование</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/forum">Форум</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/news">Новости</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/forum">Контакты</Nav.Link>
            </Nav.Item>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default MyNavbar;
