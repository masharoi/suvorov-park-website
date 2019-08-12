import React from "react";
import "../css/AllNews.css";
import { Link } from "react-router-dom";

function AllNews() {
  return (
    <section id="all-news-outer">
      <div id="all-news">
        <div id="news">
          <h2>Новости</h2>
          <ul>
            <li>News Item</li>
          </ul>
        </div>
        <div id="latest-documents">
          <h2>Последние документы</h2>
          <ul>
            <li>Documents Item</li>
          </ul>
            <Link class="link" to="/documents-general">Все документы <i class="fas fa-chevron-right"></i></Link>
        </div>
      </div>
    </section>
  );
}

export default AllNews;
