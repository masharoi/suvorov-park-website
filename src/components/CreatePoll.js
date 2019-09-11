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
    const { pollTitle, optionOne, optionTwo, optionThree, optionFour } = event.target;
    var optionsList = [{option: optionOne.value}, {option: optionTwo.value}];
    if (window.localStorage.getItem("hasThirdOption") == "true") {
      optionsList.push({option: optionThree.value})
    }
    if (window.localStorage.getItem("hasFourthOption") == "true") {
      optionsList.push({option: optionFour.value})
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
    window.localStorage.setItem("hasFourthOption", false)
    window.localStorage.setItem("hasThirdOption", false)
    this.setState({PollNameValue: ""})
    this.setState({OptionOneValue: ""})
    this.setState({OptionTwoValue: ""})
    this.setState({OptionThreeValue: ""})
    this.setState({OptionFourValue: ""})
    window.location.reload();
  }

  handleAddOptionClicked = event => {
    event.preventDefault();
    if (
      window.localStorage.getItem("hasThirdOption") == "false" ||
      window.localStorage.getItem("hasThirdOption") == null
    ) {
      window.localStorage.setItem("hasThirdOption", true);
    } else {
      window.localStorage.setItem("hasFourthOption", true);
    }
    window.location.reload();
  };



  setVisibility  = item => {
    if (window.localStorage.getItem(item) == "true") {
      return "show"
    } else {
      return "hide"
    }
  }

  setAddOptionVisibility = () => {
    if (window.localStorage.getItem("hasFourthOption") == "true") {
      return "hide"
    } else {
      return "show-flex"
    }
  }
  render() {
    return(
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
          class={"vote-option small-size-text " + this.setVisibility("hasThirdOption")}
        >
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.state.OptionThreeValue}
            onChange={this.handleOptThreeChange}
            placeholder="Вариант ответа"
            name="optionThree"
          />
        </div>

        <div
          class={
            "vote-option small-size-text " + this.setVisibility("hasFourthOption")}
        >
          <input
            class="vote-input vote-option-inner"
            type="text"
            value={this.state.OptionFourValue}
            onChange={this.handleOptFourChange}
            placeholder="Вариант ответа"
            name="optionFour"
          />
        </div>

        <div class={"vote-option red-color link medium-size-text " + this.setAddOptionVisibility()}>
          <i class="fas fa-plus" />
          <div id="add-option" onClick={this.handleAddOptionClicked}>
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
    )
  }
}

export default CreatePoll;
