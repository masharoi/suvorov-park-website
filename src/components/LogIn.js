import React, { Component } from "react";
import "../css/Login.css";
import makeRequest from "./Utils";

class LogIn extends Component {
  constructor(props) {
    super(props);

  }

  handleResponse = json => {
    window.localStorage.setItem("isLoggedIn", true);
    window.location = "/profile";
  }

  handleLogin = event => {
    event.preventDefault();
    const { login, password } = event.target;
    const message = { username: login.value, password: password.value };
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/users/sign-in",
      this.handleResponse
    );
  };

  render() {
    return (
      <section id="login">
        <a href="/home">
          <i id="login-back" class={"fas fa-long-arrow-alt-left red-color "} />
        </a>
        <form
          id="login-form"
          action={this.handleLogin}
          class="contact-form"
          onSubmit={this.handleLogin}
        >
          <h2 id="login-header" class="large-size-text red-color">
            {" "}
            Войти в личный кабинет{" "}
          </h2>
          <input
            class="login-input medium-size-text gray-background"
            type="text"
            name="login"
            placeholder="логин"
          />
          <input
            class="login-input medium-size-text gray-background"
            type="text"
            name="password"
            placeholder="пароль"
          />
          <button
            class="login-input medium-size-text primary-button-size red-background white-color"
            type="submit"
            value="Отправить"
          >
            Войти
          </button>
        </form>
      </section>
    );
  }
}

export default LogIn;
