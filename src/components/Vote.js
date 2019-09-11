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
  }


  render() {
    return (
      <section id="vote" class="gray-background">

        <Carousel responsive={responsive}>
        <CreatePoll/>
          {this.props.pollsList.map(poll => (
            <div class="card">
              <MyPoll
                uniqueId={poll.id}
                title={poll.title}
                choices={poll.choices}
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
