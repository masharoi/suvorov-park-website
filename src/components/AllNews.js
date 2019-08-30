import React, { Component } from "react";
import "../css/AllNews.css";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  render() {
    const selectedNewsItem = newsInformation.filter(news =>
      this.filterSelectedNewsItem(news)
    )[0];
    return (
      <section id="all-news">
        <Carousel responsive={responsive}>
          {newsInformation.map(newsItem => (
            <div key={newsItem.id} class="card medium-size-text">
              <div class="bold">{newsItem.header}</div>
              <div class="medium">{newsItem.date}</div>
              <div>{newsItem.body}</div>
              <div
                onClick={() => this.togglePopup(newsItem.id)}
                class="bold orange-color link"
              >
                Подробнее
              </div>
            </div>
          ))}
        </Carousel>
        {this.state.showPopup ? (
          <Popup
            header={selectedNewsItem.header}
            date={selectedNewsItem.date}
            body={selectedNewsItem.body}
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
        <i onClick={this.props.closePopup} id="close-news-button" class="fas fa-times large-size-text" />
          <div class="bold">{this.props.header}</div>
          <div class="medium">{this.props.date}</div>
          <div>"vLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.vvvLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</div>

        </div>
      </div>
    );
  }
}

const newsInformation = [
  {
    id: 0,
    header: "Внимание! Отключение горячей воды с 5 по 15 августа!",
    author: "Администрация",
    body:
      "Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен график отключения горячей воды в Москве на 2019 год.",
    date: "03/02/2019"
  },
  {
    id: 1,
    header: "Внимание! Отключение горячей воды с 5 по 15 августа!",
    author: "Администрация",
    body:
      "Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен график отключения горячей воды в Москве на 2019 год.",
    date: "03/02/2019"
  },
  {
    id: 2,
    header: "Внимание! Отключение горячей воды с 5 по 15 августа!",
    author: "Администрация",
    body:
      "Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен график отключения горячей воды в Москве на 2019 год.",
    date: "03/02/2019"
  },
  {
    id: 3,
    header: "Внимание! Отключение горячей воды с 5 по 15 августа!",
    author: "Администрация",
    body:
      "Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен график отключения горячей воды в Москве на 2019 год.",
    date: "03/02/2019"
  },
  {
    id: 4,
    header: "Внимание! Отключение горячей воды с 5 по 15 августа!",
    author: "Администрация",
    body:
      "Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен график отключения горячей воды в Москве на 2019 год.",
    date: "03/02/2019"
  },
  {
    id: 5,
    header: "Внимание! Отключение горячей воды с 5 по 15 августа!",
    author: "Администрация",
    body:
      "Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен график отключения горячей воды в Москве на 2019 год.",
    date: "03/02/2019"
  }
];

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
