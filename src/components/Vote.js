import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from "react";
import "../css/Vote.css";
import MyPoll from "./MyPoll";
import CreatePoll from "./CreatePoll";
import makeRequest from "./Utils";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PollNameValue: "",
      OptionOneValue: "",
      OptionTwoValue: "",
      OptionThreeValue: "",
      OptionFourValue: "",
      list: this.props.pollsList
    };
  }

  handleOptOneChange = event => {
    this.setState({OptionOneValue: event.target.value});
  };
  handleOptTwoChange = event => {
    this.setState({OptionTwoValue: event.target.value});
  };
  handleOptThreeChange = event => {
    this.setState({OptionThreeValue: event.target.value});
  };
  handleOptFourChange = event => {
    this.setState({OptionFourValue: event.target.value});
  };

  handleNameChange = event => {
    this.setState({PollNameValue: event.target.value});
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
    this.setState({
      PollNameValue: "",
      OptionOneValue: "",
      OptionTwoValue: "",
      OptionThreeValue: "",
      OptionFourValue: "",
      hasThirdOption: false,
      hasFourthOption: false,
      list: [json].concat(this.props.pollsList)
    });
  };

  render() {

    const {
      PollNameValue,
      OptionOneValue,
      OptionTwoValue,
      OptionThreeValue,
      OptionFourValue
    } = this.state;

    return (
      <section id="vote" class="gray-background">
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
          />
          {this.state.list.map(poll => (
            <div class="card">
              <MyPoll
                uniqueId={poll.id}
                title={poll.title}
                choices={poll.choices}
                voted={poll.user_voted_for}
              />
            </div>
          ))}
        </Carousel>
      </section>
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
