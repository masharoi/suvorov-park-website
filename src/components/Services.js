import React from "react";
import "../css/Services.css";
import Dropdown from "react-bootstrap/Dropdown";
import makeRequest from "./Utils";
import { LOGGED_OUT } from "./Utils";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      value:""
    };
  }

  handleResponse = json => {
    if (json == LOGGED_OUT) {
      window.localStorage.setItem("isLoggedIn", false);
    } else {
      this.setState({ services: json });
    }
  };

  componentDidMount() {
    makeRequest(null, "get", "/api/services/", this.handleResponse);
  }

  handleOrderService = json => {
    alert(JSON.stringify(json))
    this.setState({value:""})
  };

  handleValueChanged = event => {
       this.setState({value: event.target.value});
  }

  handleOrderServerClicked = event => {
    event.preventDefault();
    const { servicesList, details } = event.target;
    const message = { details: details.value };
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/services/" + servicesList.value + "/order",
      this.handleOrderService
    );
  };

  render() {
    return (
      <section id="services" class="green-background">
        <div class="row">
          <div class="col-12 col-md-6" id="services-action-col">
            <form onSubmit={this.handleOrderServerClicked} id="service-form">
              <select
                name="servicesList"
                class="medium-size-text service-interaction green-background yellow-color"
                id="service-select"
                form="service-form"
              >
                {this.state.services.map(item => (
                  <option value={item.id} class="service-option">{item.title}</option>
                ))}
              </select>
              <textarea
                class="medium-size-text gray-background"
                placeholder="Дополнительная информация"
                name="details"
                onChange={this.handleValueChanged}
                value={this.state.value}
              />
              <input
                id="service-button"
                class="button medium-size-text service-interaction yellow-background green-color"
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
