import React from "react";
import "../css/Contacts.css";
import makeRequest from "./Utils";
import Loader from "react-loader-spinner";

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
      showEmailFailed: false,
      isLoading: false
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
        jsonMessage["email"] = email.value;
      }
    }
    this.setState({ isLoading: true });
    makeRequest(
      JSON.stringify(jsonMessage),
      "post",
      "/api/common/feedback",
      this.handleResponse
    );
  };

  handleResponse = response => {
    this.setState({
      name: "",
      message: "",
      email: "",
      showSuccessMessage: true,
      showErrorMessage: false,
      isLoading: false
    });
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
      showEmailFailed,
      isLoading
    } = this.state;
    return (
      <div>
        <form
          id="contact-form-home"
          class="contact-form"
          onSubmit={this.handleSendMessage}
        >
          <input
            class={
              "gray-background " +
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
                "gray-background " +
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
              "gray-background " +
              this.setError(showTextFailed)
            }
            placeholder="Текст Сообщения"
            onChange={this.handleMessageChanged}
            value={this.state.message}
            onBlur={this.validateMessage}
            name="message"
          />
          <div class="button-container">
            <input
              class="button orange-background green-color primary-button-size medium-size-text"
              type="submit"
              value="Отправить"
            />
            {isLoading ? (
              <Loader
                class="button-loader"
                type="Rings"
                color="#c95501"
                height={40}
                width={50}
                timeout={100000}
              />
            ) : null}
          </div>
        </form>
        {showSuccessMessage ? (
          <h3 class="small-size-text orange-color footer-message">
            Сообщение успешно отправлено!
          </h3>
        ) : null}
        {showErrorMessage ? (
          <h3 class="small-size-text orange-color footer-message">
            Все поля должны быть заполнены!
          </h3>
        ) : null}
      </div>
    );
  }
}

export default FeedbackForm;
