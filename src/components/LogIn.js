import React, { Component } from "react";
import "../css/Login.css";
import makeRequest from "./Utils";
import { VALIDATION_ERROR } from "./Utils";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showValidationError: false,
      showLoginFailed: false,
      showPasswordFailed: false,
      login: "",
      password: ""
    };
  }

  handleResponse = response => {
    if (response == VALIDATION_ERROR) {
      this.setState({ showValidationError: true });
    } else {
      window.localStorage.setItem("isLoggedIn", true);
      window.location = "/profile";
    }
  };

  handleLogin = event => {
    event.preventDefault();
    const { login, password } = event.target;
    if (login.value.length === 0 || password.value.length === 0) {
      this.setState({ showValidationError: true });
      this.setState({ showLoginFailed: true });
      this.setState({ showPasswordFailed: true });
      return;
    }
    const message = { username: login.value, password: password.value };
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/users/sign-in",
      this.handleResponse
    );
  };

  validateLogin = () => {
    if (this.state.login.length === 0) {
      this.setState({ showLoginFailed: true });
    } else {
      this.setState({ showLoginFailed: false });
    }
  };

  validatePassword = () => {
    if (this.state.password.length === 0) {
      this.setState({ showPasswordFailed: true });
    } else {
      this.setState({ showPasswordFailed: false });
    }
  };

  handlePasswordChanged = event => {
    this.setState({ password: event.target.value });
  };

  handleLoginChanged = event => {
    this.setState({ login: event.target.value });
  };

  setError = isError => {
    if (isError) {
      return "error-input";
    }
    return "";
  };

  render() {
    const {
      showValidationError,
      showLoginFailed,
      showPasswordFailed
    } = this.state;
    return (
      <section id="login">
        <a href="/">
          <i
            id="login-back"
            class={"fas fa-long-arrow-alt-left orange-color "}
          />
        </a>

        <form
          id="login-form"
          action={this.handleLogin}
          class="contact-form"
          onSubmit={this.handleLogin}
        >
          <h2 id="login-header" class="large-size-text orange-color">
            Войти в личный кабинет
          </h2>
          <input
            class={
              "login-input gray-background " +
              this.setError(showLoginFailed)
            }
            type="text"
            name="login"
            placeholder="логин"
            value={this.state.login}
            onChange={this.handleLoginChanged}
            onBlur={this.validateLogin}
          />
          <input
            class={
              "login-input gray-background " +
              this.setError(showPasswordFailed)
            }
            type="password"
            name="password"
            placeholder="пароль"
            value={this.state.password}
            onChange={this.handlePasswordChanged}
            onBlur={this.validatePassword}
          />
          {showValidationError ? (
            <h3 class="tiny-size-text red-color" id="login-validation">
              Неверный логин или пароль.
            </h3>
          ) : null}
          <button
            class="login-input medium-size-text primary-button-size orange-background white-color"
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
