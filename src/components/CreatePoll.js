import React, { Component } from "react";
import "../css/Vote.css";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  setVisibility = item => {
    if (item === true) {
      return "show";
    } else {
      return "hide";
    }
  };

  setAddOptionVisibility = () => {
    if (this.props.hasFourthOption === true) {
      return "hide";
    } else {
      return "show-flex";
    }
  };

  render() {
    return (
      <form className="card" id="new-vote-form" onSubmit={this.props.handleSubmit}>
        <div>
          <input
            id="vote-question-input"
            className="vote-input"
            type="text"
            value={this.props.PollNameValue}
            onChange={this.props.handleNameChange}
            placeholder="Тема для голосования"
            name="pollTitle"
          />
        </div>

        <div className="vote-option">
          <input
            className="vote-input vote-option-inner"
            type="text"
            value={this.props.OptionOneValue}
            onChange={this.props.handleOptOneChange}
            placeholder="Вариант ответа"
            name="optionOne"
          />
        </div>

        <div className="vote-option">
          <input
            className="vote-input vote-option-inner "
            type="text"
            value={this.props.OptionTwoValue}
            onChange={this.props.handleOptTwoChange}
            placeholder="Вариант ответа"
            name="optionTwo"
          />
        </div>

        <div
          className={
            "vote-option " + this.setVisibility(this.props.hasThirdOption)
          }
        >
          <input
            className="vote-input vote-option-inner"
            type="text"
            value={this.props.OptionThreeValue}
            onChange={this.props.handleOptThreeChange}
            placeholder="Вариант ответа"
            name="optionThree"
          />
          {this.props.hasFourthOption !== true ? (
            <div className="delete-option" onClick={this.props.deleteOption}>
              <i className="fas fa-times" />
            </div>
          ) : null}
        </div>

        <div
          className={
            "vote-option " + this.setVisibility(this.props.hasFourthOption)
          }
        >
          <input
            className="vote-input vote-option-inner"
            type="text"
            value={this.props.OptionFourValue}
            onChange={this.props.handleOptFourChange}
            placeholder="Вариант ответа"
            name="optionFour"
          />
          <div className="delete-option" onClick={this.props.deleteOption}>
            <i className="fas fa-times" />
          </div>
        </div>

        <div
          className={
            "vote-option red-color link " +
            this.setAddOptionVisibility()
          }
        >
          <i className="fas fa-plus" />
          <div id="add-option" onClick={this.props.handleAddOptionClicked}>
            Добавить вариант
          </div>
        </div>

        <div>
          <input
            id="create-poll-btn"
            className="button red-background white-color medium-size-text vote-button"
            type="submit"
            value="Создать"
          />
        </div>
      </form>
    );
  }
}

export default CreatePoll;
