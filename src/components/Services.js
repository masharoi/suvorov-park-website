import React from "react";
import "../css/Services.css";
import Dropdown from "react-bootstrap/Dropdown";
import makeRequest from "./Utils";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  handleResponse = json => {
    this.setState({ services: json });
  };

  componentDidMount() {
    makeRequest(null, "get", "/api/services/", this.handleResponse);
  }

  handleOrderServerClicked = event => {
    event.preventDefault();
    const { login, password } = event.target;
    const message = { username: login.value, password: password.value };
  };

  render() {
    return (
      <section id="services" class="green-background">
        <div class="row">
          <div class="col-12 col-md-6" id="services-action-col">
            <form onSubmit={this.handleOrderServerClicked} id="service-form">
              <select
                name="services-list"
                class="service-interaction green-background yellow-color"
                id="service-select"
                form="service-form"
              >
                {this.state.services.map(item => (
                  <option class="service-option">{item.title}</option>
                ))}
              </select>
              <textarea
                class="medium-size-text gray-background"
                placeholder="Дополнительная информация"
              />
              <input
                id="service-button"
                class="service-interaction yellow-background green-color"
                type="submit"
                value="Заказать услугу"
              />
            </form>
          </div>
          <div class="col-6" id="services-illustration" />
        </div>
      </section>
    );
  }
}

export default Services;
