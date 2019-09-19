import React from "react";
import "../css/Contacts.css";
import map from '../images/map.png';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import makeRequest from "./Utils";

class Contacts extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSendMessage = event => {
    event.preventDefault();
    const { userName, message } = event.target;
    if (userName.value.length === 0 || message.value === 0) {
      this.setState({ showErrorMessage: true });
      return;
    }
    const jsonMessage = { name: userName.value, text: message.value };
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

  validateEmail = () => {
    if (this.state.message.length === 0) {
      this.setState({ showTextFailed: true });
    } else {
      this.setState({ showTextFailed: false });
    }
  };

  render() {
    const mapData = {
      center:[55.73557716284752, 37.45359357672123],
      zoom: 16,
    };

    const coordinates =
      [55.73557716284752, 37.45359357672123];

    const placemarkStyle = {
      iconColor: "#C95501"
    }

    var mapStyle = {
      width: '100%',
      height: '100%',
    };

    return (
      <section id="contacts" class="row">
      <div id="contact-map" class="col-12 col-lg-6">
      <div id="map">
      <YMaps >
      <Map style={mapStyle} width="100%" height="100%" defaultState={mapData}>
        {<Placemark options={placemarkStyle} geometry={coordinates} />}
      </Map>
    </YMaps>
    </div>
      </div>
      <div id="contact-form-outer" class="col-12 col-lg-6">
        <h2 class="contact-form-header large-size-text">
        Написать нам:
        </h2>
        <form id="contact-form-home" class="contact-form">
          <input class="gray-background medium-size-text" type="text" name="name" placeholder="Ваше Имя" />
          <input class="gray-background medium-size-text" type="email" name="name" placeholder="Ваш E-mail" />
          <textarea class="gray-background medium-size-text" placeholder="Текст Сообщения" />
          <input
            class="button orange-background green-color primary-button-size medium-size-text"
            type="submit"
            value="Отправить"
          />
        </form>
      </div>
      </section>
    );
  }
}

export default Contacts;
