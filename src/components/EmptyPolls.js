import React, { Component } from "react";
import emptyPollsImage from "../images/empty-polls.svg";
import CreatePoll from "./CreatePoll";

class EmptyPolls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="vote" class="gray-background empty-poll row small-row-reverse">
        <CreatePoll class="col-md-4 col-12" />
        <div id="empty-polls-image-outer" class="red-color large-size-text col-md-8 col-12">
          <img id="empty-polls-image" src={emptyPollsImage} />
          <div>
            Пока не было создано <br /> ни одного голосования!
          </div>
        </div>
      </section>
    );
  }
}

export default EmptyPolls;
