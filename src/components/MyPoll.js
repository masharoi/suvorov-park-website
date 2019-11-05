import React, { Component } from "react";
import "../css/MyPoll.css";
import makeRequest from "./Utils";

class MyPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.uniqueId,
      title: this.props.title,
      choices: this.props.choices,
      voted: this.props.voted
    };
  }

  handleResponse = json => {
    this.setState({
      id: json.id,
      title: json.title,
      choices: json.choices,
      voted: json.user_voted_for
    });
  };

  handleVote = voteId => {
    makeRequest(
      JSON.stringify({}),
      "post",
      "/api/polls/" + this.state.id + "/vote/" + voteId,
      this.handleResponse
    );
  };

  render() {
    const notVotedView = this.state.choices.map(choice => (
      <div
        className="small-size-text vote-choice active-choice"
        onClick={() => this.handleVote(choice.id)}
      >
        {choice.option}
      </div>
    ));
    const votedView = this.state.choices.map(choice =>
      this.state.voted === choice.option ? (
        <div key={choice.id} className="small-size-text vote-choice vote-selected">
          <div>
            {choice.option} <i className="fas fa-check" />
          </div>
          <div> {choice.votes} </div>
        </div>
      ) : (
        <div key={choice.id} className="small-size-text vote-choice">
          <div> {choice.option} </div>
          <div> {choice.votes} </div>
        </div>
      )
    );
    return (
      <div id="my-poll-container">
        <div className="medium-size-text">{this.state.title}</div>
        <div>{this.state.voted != null ? votedView : notVotedView}</div>
      </div>
    );
  }
}

export default MyPoll;
