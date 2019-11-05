import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from "react";
import "../css/Vote.css";
import MyPoll from "./MyPoll";
import CreatePoll from "./CreatePoll";
import makeRequest from "./Utils";
import emptyPollsImage from "../images/empty-polls.svg";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PollNameValue: "",
      OptionOneValue: "",
      OptionTwoValue: "",
      OptionThreeValue: "",
      OptionFourValue: "",
      hasFourthOption: false,
      hasThirdOption: false,
      pollsList: this.props.pollsList,
      showErrorMessage: false
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

  handleAddOptionClicked = event => {
    event.preventDefault();
    if (this.state.hasThirdOption === true) {
      this.setState({ hasFourthOption: true });
    } else {
      this.setState({ hasThirdOption: true });
    }
  };

  deleteOption = () => {
    if (this.state.hasFourthOption === true) {
      this.setState({ hasFourthOption: false });
      return;
    }
    if (this.state.hasThirdOption === true) {
      this.setState({ hasThirdOption: false });
      return;
    }
    return;
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
    if (
      optionOne.value.replace(/\s/g, "").length === 0 ||
      optionTwo.value.replace(/\s/g, "").length === 0
    ) {
      this.setState({ showErrorMessage: true });
      return;
    }
    var optionsList = [
      { option: optionOne.value },
      { option: optionTwo.value }
    ];
    if (this.state.hasThirdOption) {
      if (optionThree.value.replace(/\s/g, "").length === 0) {
        this.setState({ showErrorMessage: true });
        return;
      } else {
        optionsList.push({ option: optionThree.value });
      }
    }
    if (this.state.hasFourthOption) {
      if (optionFour.value.replace(/\s/g, "").length === 0) {
        this.setState({ showErrorMessage: true });
        return;
      } else {
        optionsList.push({ option: optionFour.value });
      }
    }

    var hasIdentical = false;

    for (var i = 0; i < optionsList.length; i++) {
      if (i === optionsList.length - 1) {
        break;
      }

      for (var j = i + 1; j < optionsList.length; j++) {
        if (optionsList[i].option === optionsList[j].option) {
          hasIdentical = true;
          break;
        }
      }
      if (hasIdentical) {
        this.setState({ showErrorMessage: true });
        return;
      }
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
    var newList = this.props.pollsList;
    newList.unshift(json);
    this.setState({
      PollNameValue: "",
      OptionOneValue: "",
      OptionTwoValue: "",
      OptionThreeValue: "",
      OptionFourValue: "",
      hasThirdOption: false,
      hasFourthOption: false,
      pollsList: [],
      showErrorMessage: false
    });

    this.setState({ pollsList: newList });
  };

  render() {
    const {
      PollNameValue,
      OptionOneValue,
      OptionTwoValue,
      OptionThreeValue,
      OptionFourValue,
      hasThirdOption,
      hasFourthOption,
      pollsList,
      showErrorMessage
    } = this.state;

    const emptyPolls = (
      <section
        id="vote"
        className="gray-background empty-poll row small-row-reverse"
      >
        <CreatePoll
          className="col-md-4 col-12"
          PollNameValue={PollNameValue}
          OptionOneValue={OptionOneValue}
          OptionTwoValue={OptionTwoValue}
          OptionThreeValue={OptionThreeValue}
          OptionFourValue={OptionFourValue}
          handleNameChange={this.handleNameChange}
          handleOptOneChange={this.handleOptOneChange}
          handleOptTwoChange={this.handleOptTwoChange}
          handleOptThreeChange={this.handleOptThreeChange}
          handleOptFourChange={this.handleOptFourChange}
          handleSubmit={this.handleSubmit}
          hasFourthOption={hasFourthOption}
          hasThirdOption={hasThirdOption}
          handleAddOptionClicked={this.handleAddOptionClicked}
          deleteOption={this.deleteOption}
        />
        <div
          id="empty-polls-image-outer"
          className="red-color large-size-text col-md-8 col-12"
        >
          <img alt="" id="empty-polls-image" src={emptyPollsImage} />
          <div>
            Пока не было создано <br /> ни одного голосования!
          </div>
        </div>
      </section>
    );

    return (
      <div>
        {pollsList.length === 0 ? (
          emptyPolls
        ) : (
          <section id="vote" className="gray-background">
            <Carousel responsive={responsive}>
              <CreatePoll
                PollNameValue={PollNameValue}
                OptionOneValue={OptionOneValue}
                OptionTwoValue={OptionTwoValue}
                OptionThreeValue={OptionThreeValue}
                OptionFourValue={OptionFourValue}
                handleNameChange={this.handleNameChange}
                handleOptOneChange={this.handleOptOneChange}
                handleOptTwoChange={this.handleOptTwoChange}
                handleOptThreeChange={this.handleOptThreeChange}
                handleOptFourChange={this.handleOptFourChange}
                handleSubmit={this.handleSubmit}
                hasFourthOption={hasFourthOption}
                hasThirdOption={hasThirdOption}
                handleAddOptionClicked={this.handleAddOptionClicked}
                deleteOption={this.deleteOption}
              />
              {pollsList.map(poll => (
                <div key={poll.id} className="card">
                  <MyPoll
                    uniqueId={poll.id}
                    title={poll.title}
                    choices={poll.choices}
                    voted={poll.user_voted_for}
                  />
                </div>
              ))}
            </Carousel>
            {showErrorMessage ? (
              <h3
                id="vote-error-message"
                className="small-size-text green-color"
              >
                Варианты не могут быть <br /> пустыми или повторяться.
              </h3>
            ) : null}
          </section>
        )}
      </div>
    );
  }
}

const responsive = {
  SuperLargeDesktop: {
    breakpoint: { max: 4000, min: 1300 },
    items: 5
  },
  LargerDesktop: {
    breakpoint: { max: 1300, min: 1106 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1106, min: 840 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 840, min: 576 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1
  }
};

export default Vote;
