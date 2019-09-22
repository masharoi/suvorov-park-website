import React from "react";
import "../css/Contacts.css";
import makeRequest from "./Utils";
import { INTERNAL_SERVER_ERROR } from "./Utils";

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      email: "",
      showSuccessMessage: false,
      showErrorMessage: false,
      showNameFailed: false,
      showTextFailed: false,
      showEmailFailed: false
    };
  }

  handleSendMessage = event => {
    event.preventDefault();
    const { userName, message, email } = event.target;

    if (userName.value.length === 0 || message.value.length === 0) {
      this.setState({ showErrorMessage: true });
      return;
    }
    const jsonMessage = { name: userName.value, text: message.value };
    if (this.props.showEmail) {
      if (email.value.length === 0) {
        this.setState({ showErrorMessage: true });
        return;
      } else {
        jsonMessage['email'] = email.value;
      }
    }

    makeRequest(
      JSON.stringify(jsonMessage),
      "post",
      "/api/common/feedback",
      this.handleResponse
    );
  };

  handleResponse = response => {
    this.setState({ name: "" });
    this.setState({ message: "" });
    this.setState({ email: "" });
    this.setState({ showSuccessMessage: true });
    this.setState({ showErrorMessage: false });
  };

  handleNameChanged = event => {
    this.setState({ name: event.target.value });
  };

  handleMessageChanged = event => {
    this.setState({ message: event.target.value });
  };

  handleEmailChanged = event => {
    this.setState({ email: event.target.value });
  };

  setError = isError => {
    if (isError) {
      return "error-input";
    }
    return "";
  };

  validateName = () => {
    if (this.state.name.length === 0) {
      this.setState({ showNameFailed: true });
    } else {
      this.setState({ showNameFailed: false });
    }
  };

  validateMessage = () => {
    if (this.state.message.length === 0) {
      this.setState({ showTextFailed: true });
    } else {
      this.setState({ showTextFailed: false });
    }
  };

  validateEmail = () => {
    if (this.state.email.length === 0) {
      this.setState({ showEmailFailed: true });
    } else {
      this.setState({ showEmailFailed: false });
    }
  };

  render() {
    const {
      showSuccessMessage,
      showNameFailed,
      showTextFailed,
      showErrorMessage,
      showEmailFailed
    } = this.state;
    return (
      <div>
        <form id="contact-form-home" class="contact-form" onSubmit={this.handleSendMessage}>
          <input
            class={
              "gray-background medium-size-text " +
              this.setError(showNameFailed)
            }
            type="text"
            name="userName"
            placeholder="Ваше Имя"
            onChange={this.handleNameChanged}
            value={this.state.name}
            onBlur={this.validateName}
          />
          {this.props.showEmail ? (
            <input
              class={
                "gray-background medium-size-text " +
                this.setError(showEmailFailed)
              }
              type="email"
              name="email"
              placeholder="Ваш E-mail"
              onChange={this.handleEmailChanged}
              value={this.state.email}
              onBlur={this.validateEmail}
            />
          ) : null}
          <textarea
            class={
              "gray-background medium-size-text " +
              this.setError(showTextFailed)
            }
            placeholder="Текст Сообщения"
            onChange={this.handleMessageChanged}
            value={this.state.message}
            onBlur={this.validateMessage}
            name="message"
          />
          <input
            class="button orange-background green-color primary-button-size medium-size-text"
            type="submit"
            value="Отправить"
          />
        </form>
        {showSuccessMessage ? (
          <h3 class="small-size-text yellow-color footer-message">
            Сообщение успешно отправлено!
          </h3>
        ) : null}
        {showErrorMessage ? (
          <h3 class="small-size-text white-color footer-message">
            Все поля должны быть заполнены!
          </h3>
        ) : null}
      </div>
    );
  }
}

export default FeedbackForm;
