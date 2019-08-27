import React from "react";
import "../css/Forum.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function Forum() {
  return (
    <section id="forum" class="yellow-background">
      <div id="forum-link" class="large-screen">
        <a href="/full-forum" id="forum-link-text" class="white-color link bold medium-size-text">
          Все обсуждения
        </a>
        <i class="fas fa-long-arrow-alt-right white-color medium-size-text" id="forum-link-icon" />
      </div>
      <div class="row">
        <div class="col-12 col-md-4" id="forum-form-outer">
          <form id="forum-form">
            <textarea
              id="forum-text"
              class="medium-size-text"
              placeholder="Тема для обсуждения"
            />
            <input
              id="forum-button"
              class="orange-background white-color medium-size-text"
              type="submit"
              value="Создать"
            />
          </form>
        </div>
        <div class="col-12 col-md-8" id="forum-preview-container">
          <div class="forum-preview-item">
            <div class="medium-size-text">
              Сделать опрос по поводу выгула собак...
            </div>
            <div class="orange-color bold small-size-text">Подробнее</div>
          </div>
          <div class="forum-preview-item">
            <div class="medium-size-text">
              Нам необходимо собрать всеобщее собрание...
            </div>
            <div class="orange-color bold small-size-text">Подробнее</div>
          </div>
          <div class="forum-preview-item">
            <div class="medium-size-text">
              Детская площадка нуждается в ремонте!
            </div>
            <div class="orange-color bold small-size-text">Подробнее</div>
          </div>
        </div>
      </div>
      <div id="forum-link" class="small-screen">
        <a href="/full-forum" id="forum-link-text" class="white-color link bold medium-size-text">
          Все обсуждения
        </a>
        <i class="fas fa-long-arrow-alt-right white-color medium-size-text" id="forum-link-icon" />
      </div>
    </section>
  );
}

export default Forum;
