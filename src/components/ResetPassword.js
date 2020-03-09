import React from "react";
import "../css/ResetPassword.css";
import { VALIDATION_ERROR } from "./Utils";
import makeRequest from "./Utils";
import { VALIDATION } from "../Constants";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: "",
      showPasswordFailed: false,
      confirmPassword: "",
      showConfirmPasswordFailed: false,
      showValidationError: false,
      showTokenError: false,
      isForm: true,
      showNotStrongEnoughError: false,
      token: null
    };
  }

  componentDidMount() {
    let params = queryString.parse(this.props.location.search);
    console.log(params.token);
    this.setState({ token: params.token });
  }

  handleResponse = response => {
    if (response === VALIDATION_ERROR) {
      if (this.state.token) {
        this.setState({ showTokenError: true });
      }
      this.setState({ showValidationError: true });
    } else {
      this.setState({ isForm: false });
    }
  };

  handleResetPassword = event => {
    event.preventDefault();
    if (
      this.state.newPassword == null ||
      this.state.newPassword == "" ||
      this.state.confirmPassword == null ||
      this.state.confirmPassword == ""
    ) {
      this.setState({ showValidationError: true });
      return;
    }
    const { newPassword, confirmPassword } = event.target;

    if (newPassword.value !== confirmPassword.value) {
      this.setState({ showValidationError: true });
      return;
    }
    let message;

    if (this.state.token) {
      message = { new_password: confirmPassword.value, token: this.state.token };
      makeRequest(
        JSON.stringify(message),
        "post",
        "/api/users/password-reset-confirm",
        this.handleResponse
      );
    } else {
      message = { new_password: confirmPassword.value };
      makeRequest(
        JSON.stringify(message),
        "post",
        "/api/users/password-change",
        this.handleResponse
      );
    }
  };

  validatePassword = () => {
    if (VALIDATION.test(this.state.newPassword)) {
      this.setState({ showNotStrongEnoughError: false });
    } else {
      this.setState({ showNotStrongEnoughError: true });
    }
  };

  validateConfirmPassword = () => {
    if (VALIDATION.test(this.state.confirmPassword)) {
      this.setState({ showNotStrongEnoughError: false });
    } else {
      this.setState({ showNotStrongEnoughError: true });
    }
  };

  setError = isError => {
    if (isError) {
      return "error-input";
    }
    return "";
  };

  handlePasswordChanged = event => {
    this.setState({ newPassword: event.target.value });
  };

  handleConfirmPasswordChanged = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  render() {
    const {
      newPassword,
      confirmPassword,
      showValidationError,
      isForm,
      showPasswordFailed,
      showConfirmPasswordFailed,
      showNotStrongEnoughError,
      showTokenError
    } = this.state;
    return (
      <section id="reset-password">
        <a href="/profile">
          <i class={"fas fa-chevron-left orange-color login-back"} />
        </a>

        {isForm ? (
          <form
            class="login-form contact-form"
            onSubmit={this.handleResetPassword}
          >
            <h2 id="login-header" class="large-size-text orange-color">
              Создать новый пароль
            </h2>
            <input
              class={
                "login-input gray-background " +
                this.setError(showPasswordFailed)
              }
              type="password"
              name="newPassword"
              placeholder="Новый пароль"
              value={newPassword}
              onChange={this.handlePasswordChanged}
              onBlur={this.validatePassword}
            />
            <input
              class={
                "login-input gray-background " +
                this.setError(showConfirmPasswordFailed)
              }
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              value={confirmPassword}
              onChange={this.handleConfirmPasswordChanged}
              onBlur={this.validateConfirmPassword}
            />
            {showTokenError ? (
              <h3 class="small-size-text red-color text-left">
                <i class="fas fa-exclamation-circle warning-icon"></i>С вашей
                ссылкой что-то не так.{" "}
                <a
                  id="forgot-pwd-btn"
                  class="medium-size-text orange-color"
                  href="/forgot-password"
                >
                  Запросить новую
                </a>
              </h3>
            ) : null}
            {showValidationError ? (
              <h3 class="small-size-text red-color text-left">
                <i class="fas fa-exclamation-circle warning-icon"></i>
                Пароли не совпадают.
              </h3>
            ) : null}
            {showNotStrongEnoughError ? (
              <h3 class="small-size-text red-color text-left">
                <i class="fas fa-exclamation-circle warning-icon"></i>
                Пароль должен состоять минимум из 8 символов и содержать по
                крайней мере одну цифру.
              </h3>
            ) : null}
            <button
              class="login-input medium-size-text primary-button-size orange-background white-color"
              type="submit"
              value="Отправить"
            >
              Создать
            </button>
          </form>
        ) : (
          <div class="success-message-container green-color">
            <i class="fas fa-check-square" />
            <p>Пароль успешно изменен!</p>
            <a id="profile-link" href="/profile">
              Перейти в личный кабинет
            </a>
          </div>
        )}
      </section>
    );
  }
}

export default withRouter(ResetPassword);
