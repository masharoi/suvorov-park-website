import React from "react";
import "../css/AllNews.css";
import { Link } from "react-router-dom";

function AllNews() {
  return (
    <section id="all-news-outer">
      <div id="all-news">
        <div id="news">
          <h3>Новости</h3>
          <ul>
            <li>News Item</li>
            <li>News Item</li>
            <li>News Item</li>
            <li>News Item</li>
            <li>News Item</li>
          </ul>
        </div>
        <div id="latest-documents">
          <h3>Последние документы</h3>
          <ul>
            <li>Documents Item</li>
            <li>Documents Item</li>
            <li>Documents Item</li>
            <li>Documents Item</li>
            <li>Documents Item</li>
          </ul>
            <Link class="link" to="/contacts">Все документы <i class="fas fa-chevron-right"></i></Link>
        </div>
      </div>
    </section>
  );
}

export default AllNews;
