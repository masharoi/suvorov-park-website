import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function MyNavbar() {
  return (
    <section>

      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="my-nav">
          <Nav className="mr-auto">
            <Link class="top-link" to="/about">
              Компания
            </Link>
            <Link class="top-link" to="/homes">
              Дома
            </Link>
            <Link class="top-link" to="/documents">
              Документы и отчетность
            </Link>
            <Link class="top-link" to="/profile">
              Личный кабинет
            </Link>
            <Link class="top-link" to="/questionsAndAnswers">
              Вопросы и Ответы
            </Link>
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
