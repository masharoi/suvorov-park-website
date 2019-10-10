import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "../css/Images.css";

import filler1 from "../images/filler1.jpg";
import filler2 from "../images/filler2.jpg";
import filler3 from "../images/filler3.jpg";

function Images() {
  return (
    <section id="images">
      <Carousel responsive={responsive} infinite={true}>
        <img class="image" src={filler1} />
        <img class="image" src={filler2} />
        <img class="image" src={filler3} />
      </Carousel>
    </section>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default Images;
