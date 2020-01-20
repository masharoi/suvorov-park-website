import React from "react";
import "../css/ForgotPassword.css";
import { VALIDATION_ERROR } from "./Utils";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isForm: true,
      email: "example@mail.ru"
    };
  }

  handleResponse = response => {
    if (response === VALIDATION_ERROR) {
      // do something
    } else {
      this.setState({ isForm: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login } = event.target;
    //makeHTTPRequest
    this.handleResponse(-1);
  };
  render() {
    const { isForm, email } = this.state;
    return (
      <section id="forgot-password">
        <a href="/profile">
          <i class={"fas fa-chevron-left orange-color login-back"} />
        </a>

        {isForm ? (
          <form class="login-form contact-form" onSubmit={this.handleSubmit}>
            <h2 id="login-header" class="large-size-text orange-color">
              Введите свой логин и мы отправим вам инструкции на почту.
            </h2>
            <input
              class={"login-input gray-background "}
              type="text"
              name="login"
              placeholder="логин"
            />
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
