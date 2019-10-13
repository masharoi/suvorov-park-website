import React, { Component } from "react";
import "../css/Vote.css";
import makeRequest from "./Utils";

class CreatePoll extends Component {
  constructor(props) {
    super(props);

  }



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

  render() {
    return (
      <form class="card" id="new-vote-form" onSubmit={this.props.handleSubmit}>
        <div>
          <input
            id="vote-question-input"
            class="vote-input"
            type="text"
            value={this.props.PollNameValue}
            onChange={this.props.handleNameChange}
            placeholder="Тема для голосования"
            name="pollTitle"
          />
        </div>

        <div class="vote-option">
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.props.OptionOneValue}
            onChange={this.props.handleOptOneChange}
            placeholder="Вариант ответа"
            name="optionOne"
          />
        </div>

        <div class="vote-option">
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
            "vote-option " + this.setVisibility(this.props.hasThirdOption)
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
          {this.props.hasFourthOption != true ? (
            <div class="delete-option" onClick={this.props.deleteOption}>
              <i class="fas fa-times" />
            </div>
          ) : null}
        </div>

        <div
          class={
            "vote-option " + this.setVisibility(this.props.hasFourthOption)
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
          <div class="delete-option" onClick={this.props.deleteOption}>
            <i class="fas fa-times" />
          </div>
        </div>

        <div
          class={
            "vote-option red-color link " +
            this.setAddOptionVisibility()
          }
        >
          <i class="fas fa-plus" />
          <div id="add-option" onClick={this.props.handleAddOptionClicked}>
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
