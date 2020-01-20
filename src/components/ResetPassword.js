import React from "react";
import "../css/ResetPassword.css";
import { VALIDATION_ERROR } from "./Utils";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: "",
      showPasswordFailed: false,
      confirmPassword: "",
      showConfirmPasswordFailed: false,
      showValidationError: false,
      isForm: true
    };
  }

  handleResponse = response => {
    if (response === VALIDATION_ERROR) {
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
      console.log(newPassword);
      console.log(confirmPassword);
      this.setState({ showValidationError: true });
      return;
    }
    //makeHTTPRequest
    this.handleResponse(-1);
  };

  validatePassword = () => {
    if (this.state.newPassword.length === 0) {
      this.setState({ showPasswordFailed: true });
    } else {
      this.setState({ showPasswordFailed: false });
    }
  };

  validateConfirmPassword = () => {
    if (this.state.confirmPassword.length === 0) {
      this.setState({ showPasswordFailed: true });
    } else {
      this.setState({ showPasswordFailed: false });
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
      showConfirmPasswordFailed
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
              type="text"
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
              type="text"
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              value={confirmPassword}
              onChange={this.handleConfirmPasswordChanged}
              onBlur={this.validateConfirmPassword}
            />
            {showValidationError ? (
              <h3 class="tiny-size-text red-color text-left">
                Пароли не совпадают или пусты.
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
