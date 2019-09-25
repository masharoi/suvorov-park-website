import React, { Component } from "react";
import "../css/Vote.css";
import makeRequest from "./Utils";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PollNameValue: "",
      OptionOneValue: "",
      OptionTwoValue: "",
      OptionThreeValue: "",
      OptionFourValue: "",
      hasThirdOption: false,
      hasFourthOption: false
    };
  }
  handleOptOneChange = event => {
    this.setState({ OptionOneValue: event.target.value });
  };
  handleOptTwoChange = event => {
    this.setState({ OptionTwoValue: event.target.value });
  };
  handleOptThreeChange = event => {
    this.setState({ OptionThreeValue: event.target.value });
  };
  handleOptFourChange = event => {
    this.setState({ OptionFourValue: event.target.value });
  };

  handleNameChange = event => {
    this.setState({ PollNameValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      pollTitle,
      optionOne,
      optionTwo,
      optionThree,
      optionFour
    } = event.target;
    var optionsList = [
      { option: optionOne.value },
      { option: optionTwo.value }
    ];
    if (window.localStorage.getItem("hasThirdOption") == "true") {
      optionsList.push({ option: optionThree.value });
    }
    if (window.localStorage.getItem("hasFourthOption") == "true") {
      optionsList.push({ option: optionFour.value });
    }
    const message = { title: pollTitle.value, choices: optionsList };
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/polls/",
      this.handleCreatePoll
    );
  };

  handleCreatePoll = json => {
    window.localStorage.setItem("hasFourthOption", false);
    window.localStorage.setItem("hasThirdOption", false);
    this.setState({ PollNameValue: "" });
    this.setState({ OptionOneValue: "" });
    this.setState({ OptionTwoValue: "" });
    this.setState({ OptionThreeValue: "" });
    this.setState({ OptionFourValue: "" });
    window.location.reload();
  };

  handleAddOptionClicked = event => {
    event.preventDefault();
    if (this.state.hasThirdOption == true) {
      this.setState({hasFourthOption: true})
    } else {
      this.setState({hasThirdOption: true})
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
    if (this.state.hasFourthOption == true) {
      return "hide";
    } else {
      return "show-flex";
    }
  };

  deleteOption = () => {
    if (this.state.hasFourthOption == true) {
      this.setState({hasFourthOption: false});
      return;
    }
    if (this.state.hasThirdOption == true) {
      this.setState({hasThirdOption: false});
      return;
    }
    return;
  }
  render() {
    const {hasThirdOption, hasFourthOption} = this.state;
    return (
      <form class="card" id="new-vote-form" onSubmit={this.handleSubmit}>
        <div>
          <input
            id="vote-question-input"
            class="vote-input medium-size-text"
            type="text"
            value={this.state.PollNameValue}
            onChange={this.handleNameChange}
            placeholder="Тема для голосования"
            name="pollTitle"
          />
        </div>

        <div class="vote-option small-size-text">
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.state.OptionOneValue}
            onChange={this.handleOptOneChange}
            placeholder="Вариант ответа"
            name="optionOne"
          />
        </div>

        <div class="vote-option small-size-text">
          <input
            class="vote-input vote-option-inner "
            type="text"
            value={this.state.OptionTwoValue}
            onChange={this.handleOptTwoChange}
            placeholder="Вариант ответа"
            name="optionTwo"
          />
        </div>

        <div
          class={
            "vote-option small-size-text " +
            this.setVisibility(hasThirdOption)
          }
        >
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.state.OptionThreeValue}
            onChange={this.handleOptThreeChange}
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
            "vote-option small-size-text " +
            this.setVisibility(hasFourthOption)
          }
        >
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.state.OptionFourValue}
            onChange={this.handleOptFourChange}
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
