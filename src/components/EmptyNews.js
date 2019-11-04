import React, { Component } from "react";
import "../css/AllNews.css";

class EmptyNews extends Component {

  render() {
    return (
      <section id="all-news" className="empty-news">
      <div className="red-color large-size-text">Новостей пока нет.</div>
      </section>
    );
  }
}

export default EmptyNews;
