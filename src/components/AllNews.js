import React from "react";
import "../css/AllNews.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import makeRequest from "./Utils";

class AllNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false, selectedNewsId: 0 };
  }

  togglePopup = id => {
    this.setState({
      showPopup: !this.state.showPopup,
      selectedNewsId: id
    });
  };

  filterSelectedNewsItem = news => {
    return news.id === this.state.selectedNewsId;
  };

  handleResponse = json => {
    this.setState({ newsInfo: json });
  };

  componentDidMount() {
    makeRequest(null, "get", "/api/common/news", this.handleResponse);
  }

  setPreviewText = text => {
    if (text.length > 210) {
      return text.substring(0, 210) + "...";
    }
    return text;
  };

  setMoreLinkVisibility = text => {
    if (text.length > 210) {
      return "show";
    } else {
      return "hide";
    }
  };

  render() {
    var selectedNewsItem = this.props.newsList.filter(news =>
      this.filterSelectedNewsItem(news)
    )[0];

    return (
      <section id="all-news">
        <Carousel responsive={responsive}>
          {this.props.newsList.map(newsItem => (
            <div key={newsItem.id} className="card medium-size-text">
              <div>
                <div className="bold">{newsItem.title}</div>
                <div className="medium">{newsItem.date}</div>
              </div>
              <div>{this.setPreviewText(newsItem.text)}</div>
              <div
                onClick={() => this.togglePopup(newsItem.id)}
                className={
                  "bold orange-color link " +
                  this.setMoreLinkVisibility(newsItem.text)
                }
              >
                Подробнее
              </div>
            </div>
          ))}
        </Carousel>
        {this.state.showPopup === true ? (
          <Popup
            header={selectedNewsItem.title}
            date={selectedNewsItem.date}
            body={selectedNewsItem.text}
            closePopup={this.togglePopup}
          />
        ) : null}
      </section>
    );
  }
}

class Popup extends React.Component {
  render() {
    return (
      <div className="popup medium-size-text">
        <div className="popup-inner">
          <i
            onClick={this.props.closePopup}
            id="close-news-button"
            className="fas fa-times large-size-text"
          />
          <div className="bold">{this.props.header}</div>
          <div className="medium">{this.props.date}</div>
          <div>{this.props.body}</div>
        </div>
      </div>
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
export default AllNews;
