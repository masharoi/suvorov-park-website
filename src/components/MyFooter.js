import React from "react";
import "../css/Footer.css";
import makeRequest from "./Utils";
import FeedbackForm from "./FeedbackForm";
import footerIllustration from "../images/footer.svg";
import Loader from "react-loader-spinner";

class MyFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      showSuccessMessage: false,
      showErrorMessage: false,
      showNameFailed: false,
      showTextFailed: false,
      isLoading: false
    };
  }

  handleResponse = response => {
    this.setState({
      name: "",
      message: "",
      showSuccessMessage: true,
      showErrorMessage: false,
      isLoading: false
    });
  };

  handleSendMessage = event => {
    event.preventDefault();
    const { userName, message } = event.target;
    if (userName.value.length === 0 || message.value === 0) {
      this.setState({ showErrorMessage: true });
      return;
    }

    const jsonMessage = { name: userName.value, text: message.value };
    this.setState({ isLoading: true });
    makeRequest(
      JSON.stringify(jsonMessage),
      "post",
      "/api/common/feedback",
      this.handleResponse
    );
  };

  handleNameChanged = event => {
    this.setState({ name: event.target.value });
  };

  handleMessageChanged = event => {
    this.setState({ message: event.target.value });
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

  render() {
    const {
      showSuccessMessage,
      showNameFailed,
      showTextFailed,
      showErrorMessage,
      isLoading
    } = this.state;

    const form = (
      <div class="col-lg-4 col-md-6  col-12 form-container ">
        <div class="contact-form-header large-size-text medium">
          Обратная связь
        </div>
        <div>
          <form class="contact-form" onSubmit={this.handleSendMessage}>
            <input
              class={"gray-background " + this.setError(showNameFailed)}
              type="text"
              name="userName"
              placeholder="Ваше Имя"
              onChange={this.handleNameChanged}
              value={this.state.name}
              onBlur={this.validateName}
            />
            <textarea
              onChange={this.handleMessageChanged}
              value={this.state.message}
              class={"gray-background " + this.setError(showTextFailed)}
              placeholder="Текст Сообщения"
              name="message"
              onBlur={this.validateMessage}
            />
            <div class="button-container">
              <input
                class="button medium-size-text primary-button-size yellow-background green-color"
                type="submit"
                value="Отправить"
              />
              {isLoading ? (
                <Loader
                  class="button-loader"
                  type="Rings"
                  color="#eaa81b"
                  height={40}
                  width={50}
                  timeout={100000}
                />
              ) : null}
            </div>
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
      </div>
    );
    return (
      <section id="footer" class="row white-color">
        <div id="footer-illustration">
          <img src={footerIllustration} />
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <h2 id="contacts-main-header" class="large-size-text medium">
            Контакты
          </h2>

          <div class="row">
            <p class="contacts-item col-6 col-md-12 small-size-text">
              <span class="contacts-header medium-size-text">
                Диспетчерская
              </span>
              <br /> 8 (499) 146-05-13 Охрана (круглосуточно) <br /> 8 (977)
              637-15-29 Губарев Виктор Михайлович
            </p>
            <p class="contacts-item col-6 col-md-12 small-size-text">
              <span class="contacts-header medium-size-text">Бухгалтерия</span>
              <br />8 (926) 538-88-46 (с 10:00 до 18:00)
            </p>
            <p class="contacts-item col-6 col-md-12 small-size-text">
              <span class="contacts-header medium-size-text">
                Председатель УК
              </span>
              <br />
              tsg.suvorov@mail.ru <br /> Зайцев Илья Григорьевич
            </p>
            <p class="contacts-item col-6 col-md-12 small-size-text">
              8 (977) 282-73-75 <br />
              Рыбак Валерий Александрович
            </p>
          </div>
        </div>
        {!this.props.isHome ? form : <div />}
        <div class="col-lg-4 col-md-6 col-12 address">
          <h2 class="large-size-text medium">ТСЖ "Суворов Парк"</h2>
          <div class="contacts-preview-item small-size-text">
            <div class="contacts-header medium-size-text">Адрес:</div>
            <div>
              ул. Малая Филевская, д.40, корп.1, этаж 23, пом 1 <br /> 121433,
              г.Москва
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyFooter;
