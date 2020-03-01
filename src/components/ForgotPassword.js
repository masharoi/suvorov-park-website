import React from "react";
import "../css/ForgotPassword.css";
import { VALIDATION_ERROR } from "./Utils";
import makeRequest from "./Utils";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isForm: true,
      email: "",
      showValidationError: false
    };
  }

  handleResponse = response => {
    if (response === VALIDATION_ERROR) {
      this.setState({ showValidationError: true });
    } else {
      this.setState({ isForm: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email } = event.target;
    const message = { email: email.value };
    this.setState({ email: email.value });
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/users/password-reset-request",
      this.handleResponse
    );
  };

  render() {
    const { isForm, email, showValidationError } = this.state;
    return (
      <section id="forgot-password">
        <a href="/profile">
          <i class={"fas fa-chevron-left orange-color login-back"} />
        </a>

        {isForm ? (
          <form class="login-form contact-form" onSubmit={this.handleSubmit}>
            <h2 id="login-header" class="large-size-text orange-color">
              Введите почту привязанную к вашему аккаунту.
            </h2>
            <input
              class={"login-input gray-background "}
              type="text"
              name="email"
              placeholder="example@mail.ru"
            />
            {showValidationError ? (
              <h3 class="small-size-text red-color text-left">
              <i class="fas fa-exclamation-circle warning-icon"></i>
                Почта не была найдена.
              </h3>
            ) : null}
            <button
              class="login-input medium-size-text primary-button-size orange-background white-color"
              type="submit"
              value="Отправить"
            >
              Отправить
            </button>
          </form>
        ) : (
          <div class="orange-color success-message-container">
          <i class="fas fa-envelope-open orange-color"/>
            <p>Инструкции успешно отправлены на вашу почту.</p>
            <p><strong>{email}</strong></p>
          </div>
        )}
      </section>
    );
  }
}
