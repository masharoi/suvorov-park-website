import React from "react";
import "../css/Video.css";
import Carousel from "react-multi-carousel";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmall: true
    };
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 1250) {
      this.setState({ isSmall: true });
    } else {
      this.setState({ isSmall: false });
    }
  };

  render() {
    return (
      <section id="videos">
        <Carousel
          responsive={responsive}
          infinite={true}
          centerMode={!this.state.isSmall}
        >
          {this.props.videosList.map(item => (
            <video class="video" controls>
              <source src={"http://92.53.67.152" + item.url} />
            </video>
          ))}
        </Carousel>
      </section>
    );
  }
}

const responsive = {
  superLargeDesktop: {
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

export default Video;
