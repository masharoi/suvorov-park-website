import React, { Component } from "react";
import "../css/MyPoll.css";
import makeRequest from "./Utils";

class MyPoll extends Component {
  constructor(props) {
    super(props);
  }

  handleResponse = json => {
    window.location = "/profile#vote";
    window.location.reload();
  };

  handleVote = voteId => {
    makeRequest(
      JSON.stringify({}),
      "post",
      "/api/polls/" + this.props.uniqueId + "/vote/" + voteId,
      this.handleResponse
    );
  };

  render() {
    const notVotedView = this.props.choices.map(choice => (
      <div class="small-size-text vote-choice active-choice" onClick={() => this.handleVote(choice.id)}>{choice.option}</div>
    ));
    const votedView = this.props.choices.map(choice =>
      this.props.voted == choice.option ? (
        <div class="small-size-text vote-choice vote-selected">
          <div> {choice.option} <i class="fas fa-check"></i></div>
          <div> {choice.votes} </div>
        </div>
      ) : (
        <div class="small-size-text vote-choice">
          <div> {choice.option} </div>
          <div> {choice.votes} </div>
        </div>
      )
    );
    return (
      <div id="my-poll-container">
        <div class="medium-size-text">{this.props.title}</div>
        <div>
        {this.props.voted != null ? votedView : notVotedView}
        </div>
      </div>
    );
  }
}

export default MyPoll;
