import React from "react";
import "../css/Forum.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function Forum() {
  return (
    <section id="forum" class="yellow-background">
      <div class="row">
        <div class="col-4" id="forum-form-outer">
          <form id="forum-form">
            <textarea id="forum-text" class="medium-size-text" placeholder="Тема для обсуждения" />
            <input
              id="forum-button"
              class="orange-background white-color "
              type="submit"
              value="Создать"
            />
          </form>
        </div>
        <div class="col-8" id="forum-preview-container">
          <div class="forum-preview-item">
            <div class="medium-size-text">Сделать опрос по поводу выгула собак...</div>
            <div class="orange-color bold medium-size-text">Подробнее</div>
          </div>
          <div class="forum-preview-item">
            <div class="medium-size-text">Нам необходимо собрать всеобщее собрание... </div>
            <div class="orange-color bold medium-size-text">Подробнее</div>
          </div>
          <div class="forum-preview-item">
            <div class="medium-size-text">Детская площадка нуждается в ремонте!</div>
            <div class="orange-color bold medium-size-text">Подробнее</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forum;
