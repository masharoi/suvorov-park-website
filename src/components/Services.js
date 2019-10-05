import React from "react";
import "../css/Services.css";
import Dropdown from "react-bootstrap/Dropdown";
import makeRequest from "./Utils";
import { LOGGED_OUT } from "./Utils";
import servicesIllustration from '../images/services2.svg';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      value: "",
      showSuccessMessage: false
    };
  }

  handleResponse = json => {
    this.setState({ services: json });
  };

  componentDidMount() {
    makeRequest(null, "get", "/api/services/", this.handleResponse);
  }

  handleOrderService = json => {
    this.setState({showSuccessMessage:true})
    this.setState({ value: "" });
  };

  handleValueChanged = event => {
    this.setState({ value: event.target.value });
  };

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
    const {showSuccessMessage} = this.state;
    return (
      <section id="services" class="green-background">
        <div class="row">
          <div class="col-12 col-md-4" id="services-action-col">
            <form onSubmit={this.handleOrderServerClicked} id="service-form">
              <select
                name="servicesList"
                class="medium-size-text service-interaction green-background yellow-color"
                id="service-select"
                form="service-form"
              >
                {this.state.services.map(item => (
                  <option value={item.id} class="service-option">
                    {item.title}
                  </option>
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
              {showSuccessMessage ? (
                <h3 class="small-size-text yellow-color">
                  Ваша услуга принята!
                </h3>
              ) : null}
            </form>
          </div>
          <div class="col-8" id="services-illustration">
            <img src={servicesIllustration}/>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
