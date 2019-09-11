import React, { Component } from "react";
import Poll from "react-polls";
import "../css/Vote.css";
import makeRequest from "./Utils";

class MyPoll extends Component {
  constructor(props) {
    super(props);
    this.state = { pollAnswers: props.choices, id:props.uniqueId , voted: ""};
  }

  handleResponse = (json) => {
    this.setState({pollAnswers:json.choices, voted: "я"})
  }

  handleVote = voteAnswer => {
    const { pollAnswers, id } = this.state;
    const newPollAnswers = pollAnswers.forEach(answer => {
      if (answer.option === voteAnswer) {
        const answerId = answer.id;
        makeRequest(
          {},
          "post",
          "/api/polls/" + id +"/vote/" + answerId,
          this.handleResponse
        );
      };
    });
  };

  render() {
    const { pollAnswers, voted } = this.state;
    return (
      <Poll
        id="poll"
        noStorage={true}
        customStyles={styles}
        question={this.props.title}
        answers={this.state.pollAnswers}
        onVote={this.handleVote}
        vote={voted}
      />
    );
  }
}
const styles = [{ questionBold: false }];

export default MyPoll;
