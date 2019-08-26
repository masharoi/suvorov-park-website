import React, { Component } from "react";
import Poll from "react-polls";
import "../css/Vote.css";

class MyPoll extends Component {
  constructor(props) {
    super(props);
    this.state = { pollAnswers: [...pollAnswers] };
  }

  handleVote = voteAnswer => {
    const { pollAnswers } = this.state;
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    this.setState({
      pollAnswers: newPollAnswers
    });
  };

  render() {
    const { pollAnswers } = this.state;
    return (
      <Poll id="poll"
    customStyles={styles}
        question={pollQuestion}
        answers={pollAnswers}
        onVote={this.handleVote}
      />
    );
  }
}
const styles=[{questionBold: false}, {theme: 'red'}];
const pollQuestion = "Имеется техническая возможность организовать в’езд в паркинг по улитке (без лифтов). Кто за проработку этого вопроса?";
const pollAnswers = [{ option: "Я", votes: 8 }, { option: "Не Я", votes: 2 }];

export default MyPoll;
