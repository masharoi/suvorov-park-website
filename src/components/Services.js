import React from "react";
import "../css/Services.css";
import Dropdown from "react-bootstrap/Dropdown";
import makeRequest from "./Utils";
import { LOGGED_OUT } from "./Utils";
import servicesIllustration from "../images/services2.svg";
import Loader from "react-loader-spinner";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showSuccessMessage: false,
      isLoading: false
    };
  }

  handleOrderService = json => {
    this.setState({ showSuccessMessage: true, value: "" , isLoading: false });
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
    this.setState({ isLoading: true });
  };

  render() {
    const { showSuccessMessage, isLoading } = this.state;
    return (
      <section id="services" class="green-background">
        <div class="row">
          <div class="col-12 col-md-4" id="services-action-col">
            <form onSubmit={this.handleOrderServerClicked} id="service-form">
              <select
                name="servicesList"
                class="input-padding service-interaction green-background yellow-color"
                id="service-select"
                form="service-form"
              >
                {this.props.servicesList.map(item => (
                  <option value={item.id} class="service-option">
                    {item.title}
                  </option>
                ))}
              </select>
              <textarea
                class="gray-background"
                placeholder="Дополнительная информация"
                name="details"
                onChange={this.handleValueChanged}
                value={this.state.value}
              />
              <div class="service-interaction button button-container yellow-background green-color">
                <input
                  id="service-button"
                  class="medium-size-text"
                  type="submit"
                  value="Заказать услугу"
                />
                {isLoading ? (
                  <Loader
                    class="button-loader"
                    type="Rings"
                    color="#012c0b"
                    height={40}
                    width={50}
                    timeout={100000}
                  />
                ) : null}
              </div>
              {showSuccessMessage ? (
                <h3 class="small-size-text yellow-color">
                  Ваша услуга принята!
                </h3>
              ) : null}
            </form>
          </div>
          <div class="col-8" id="services-illustration">
            <img src={servicesIllustration} />
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
