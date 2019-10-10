import React, { Component } from "react";
import "../css/Vote.css";
import makeRequest from "./Utils";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasThirdOption: false,
      hasFourthOption: false
    }
  }

  handleAddOptionClicked = event => {
    event.preventDefault();
    if (this.state.hasThirdOption == true) {
      this.state.hasFourthOption = true;
    } else {
      this.state.hasThirdOption = true;
    }
  };

  setVisibility = item => {
    if (item == true) {
      return "show";
    } else {
      return "hide";
    }
  };

  setAddOptionVisibility = () => {
    if (this.props.hasFourthOption == true) {
      return "hide";
    } else {
      return "show-flex";
    }
  };

  deleteOption = () => {
    if (this.state.hasFourthOption == true) {
      this.state.hasFourthOption = false;
      return;
    }
    if (this.props.hasThirdOption == true) {
      this.props.hasThirdOption = false;
      return;
    }
    return;
  };

  render() {
    const { hasThirdOption, hasFourthOption } = this.state;
    return (
      <form class="card" id="new-vote-form" onSubmit={this.props.handleSubmit}>
        <div>
          <input
            id="vote-question-input"
            class="vote-input medium-size-text"
            type="text"
            value={this.props.PollNameValue}
            onChange={this.props.handleNameChange}
            placeholder="Тема для голосования"
            name="pollTitle"
          />
        </div>

        <div class="vote-option small-size-text">
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.props.OptionOneValue}
            onChange={this.props.handleOptOneChange}
            placeholder="Вариант ответа"
            name="optionOne"
          />
        </div>

        <div class="vote-option small-size-text">
          <input
            class="vote-input vote-option-inner "
            type="text"
            value={this.props.OptionTwoValue}
            onChange={this.props.handleOptTwoChange}
            placeholder="Вариант ответа"
            name="optionTwo"
          />
        </div>

        <div
          class={
            "vote-option small-size-text " + this.setVisibility(hasThirdOption)
          }
        >
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.props.OptionThreeValue}
            onChange={this.props.handleOptThreeChange}
            placeholder="Вариант ответа"
            name="optionThree"
          />
          {hasFourthOption != true ? (
            <div class="delete-option" onClick={this.deleteOption}>
              <i class="fas fa-times" />
            </div>
          ) : null}
        </div>

        <div
          class={
            "vote-option small-size-text " + this.setVisibility(hasFourthOption)
          }
        >
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.props.OptionFourValue}
            onChange={this.props.handleOptFourChange}
            placeholder="Вариант ответа"
            name="optionFour"
          />
          <div class="delete-option" onClick={this.deleteOption}>
            <i class="fas fa-times" />
          </div>
        </div>

        <div
          class={
            "vote-option red-color link medium-size-text " +
            this.setAddOptionVisibility()
          }
        >
          <i class="fas fa-plus" />
          <div id="add-option" onClick={this.handleAddOptionClicked}>
            Добавить вариант
          </div>
        </div>

        <div>
          <input
            class="button red-background white-color medium-size-text vote-button"
            type="submit"
            value="Создать"
          />
        </div>
      </form>
    );
  }
}

export default CreatePoll;
