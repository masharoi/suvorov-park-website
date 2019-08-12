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
          <Nav className="mr-auto">
            <NavDropdown className="nav-dropdown" title="Компания">
              <NavDropdown.Item href="/about">О нас</NavDropdown.Item>
              <NavDropdown.Item href="/news">Новости</NavDropdown.Item>
              <NavDropdown.Item href="/contacts">Контакты</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="nav-dropdown" title="Дома">
              <NavDropdown.Item href="/homes-general">
                Общая информация
              </NavDropdown.Item>
              <NavDropdown.Item href="/photogallery">
                Фотогалерея
              </NavDropdown.Item>
              <NavDropdown.Item href="/video">Видео</NavDropdown.Item>
              <NavDropdown.Item href="/forum">Форум</NavDropdown.Item>
              <NavDropdown.Item href="/blogs">Блоги</NavDropdown.Item>
              <NavDropdown.Item href="/debts">Должники</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav-dropdown"
              title="Документы и отчетность"
            />

            <NavDropdown className="nav-dropdown" title="Личный кабинет" />

            <Nav.Item>
              <Nav.Link className="navbar-link" href="/questionsAndAnswers">Вопросы и Ответы</Nav.Link>
            </Nav.Item>

          </Nav>
          <Form inline>
            <i className="fas fa-search" />
            <FormControl
              type="text"
              placeholder="Поиск по сайту"
              className=""
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default MyNavbar;
