import React, { Component } from "react";
import "../css/AllNews.css";
import emptyNewsScreen from "../images/empty-news.svg";

class EmptyNews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="all-news" class="empty-news">
      <div class="red-color large-size-text">Новостей пока нет.</div>
      </section>
    );
  }
}

export default EmptyNews;
