import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from "react";
import "../css/Vote.css";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  handleClick(event) {
    alert("Clicked!");
    event.preventDefault();
  }

  render() {
    return (
      <section id="vote" class="gray-background">
        <Carousel responsive={responsive}>
          <form class="card" id="new-vote-form" onSubmit={this.handleSubmit}>
            <div>
              <input
              id="vote-question-input"
                class="vote-input medium-size-text"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Тема для голосования"
              />
            </div>

            <div class="vote-option medium-size-text">
              <span class="vote-decor" />
              <input
                class="vote-input vote-option-inner"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Вариант ответа"
              />
            </div>

            <div class="vote-option medium-size-text">
              <span class="vote-decor" />
              <input
                class="vote-input  vote-option-inner"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Вариант ответа"
              />
            </div>

            <div class="vote-option red-color link medium-size-text">
              <i class="fas fa-plus" />
              <div id="add-option" onClick={this.handleClick}>
                Добавить вариант
              </div>
            </div>

            <div>
              <input
                class="red-background white-color medium-size-text vote-button"
                type="submit"
                value="Создать"
              />
            </div>
          </form>
          <div class="card" />
          <div class="card" />
          <div class="card" />
        </Carousel>
      </section>
    );
  }
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default Vote;
