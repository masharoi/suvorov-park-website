import React, { Component } from "react";
import emptyPollsImage from "../images/empty-polls.svg";
import CreatePoll from "./CreatePoll";

class EmptyPolls extends Component {

  render() {
    return (
      <section id="vote" className="gray-background empty-poll row small-row-reverse">
        <CreatePoll className="col-md-4 col-12" />
        <div id="empty-polls-image-outer" className="red-color large-size-text col-md-8 col-12">
          <img alt="" id="empty-polls-image" src={emptyPollsImage} />
          <div>
            Пока не было создано <br /> ни одного голосования!
          </div>
        </div>
      </section>
    );
  }
}

export default EmptyPolls;
