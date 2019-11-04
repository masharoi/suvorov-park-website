import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "../css/Images.css";

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmall: true
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
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
      <section id="images">
        <Carousel
          responsive={responsive}
          infinite={true}
          centerMode={!this.state.isSmall}
        >
          {this.props.imagesList.map(item => (
            <div class="image-container">
              <img alt="" class="image" src={"http://92.53.67.152" + item.url} />
            </div>
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

export default Images;
