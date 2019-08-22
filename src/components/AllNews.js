import React, { Component } from "react";
import "../css/AllNews.css";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function AllNews() {
  return (
    <section id="all-news">
    <Carousel responsive={responsive}>
      <div class="card medium-size-text">
        <div class="bold">Внимание! Отключение горячей воды с 5 по 15 августа!</div>
        <div class="medium">2019-23-07</div>
        <div class="">
          Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в
          наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен
          график отключения горячей воды в Москве на 2019 год.
        </div>
        <div class="bold orange-color link">Подробнее</div>
      </div>
      <div class="card medium-size-text">
        <div class="bold">Внимание! Отключение горячей воды с 5 по 15 августа!</div>
        <div class="medium">2019-23-07</div>
        <div class="">
          Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в
          наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен
          график отключения горячей воды в Москве на 2019 год.
        </div>
        <div class="bold orange-color link">Подробнее</div>
      </div>
      <div class="card medium-size-text">
        <div class="bold">Внимание! Отключение горячей воды с 5 по 15 августа!</div>
        <div class="medium">2019-23-07</div>
        <div class="">
          Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в
          наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен
          график отключения горячей воды в Москве на 2019 год.
        </div>
        <div class="bold orange-color link">Подробнее</div>
      </div>
      <div class="card medium-size-text">
        <div class="bold">Внимание! Отключение горячей воды с 5 по 15 августа!</div>
        <div class="medium">2019-23-07</div>
        <div class="">
          Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в
          наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен
          график отключения горячей воды в Москве на 2019 год.
        </div>
        <div class="bold orange-color link">Подробнее</div>
      </div>
      <div class="card medium-size-text">
        <div class="bold">Внимание! Отключение горячей воды с 5 по 15 августа!</div>
        <div class="medium">2019-23-07</div>
        <div class="">
          Уважаемые жители! Напоминаем вам, что с 5 августа по 15 августа в
          наших домах будет отключена горячая вода! На сайте ПАО «МОЭК» размещен
          график отключения горячей воды в Москве на 2019 год.
        </div>
        <div class="bold orange-color link">Подробнее</div>
      </div>
    </Carousel>
    </section>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default AllNews;
