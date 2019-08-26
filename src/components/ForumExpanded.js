import React, { Component } from "react";
import "../css/Forum.css";
import ForumChat from "./ForumChat";

class ForumExpanded extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="forum-expanded">
      <div id="forum-back-button-container"><a id="forum-back-button" href="/profile"><i class="fas fa-long-arrow-alt-left"></i></a></div>
        <div class="row">
          <div class="col-6">
            <ul id="forum-list">
              <li class="forum-card medium-size-text active-forum">
                <p class="forum-card-text">
                  Есть предложение разделить кнопку вызова двух лифтов, идущих в
                  паркинг, и кнопку вызова лифта, не идущего в паркинг. Что вы
                  думаете по этому поводу?
                </p>
                <div class="forum-card-footer row small-size-text">
                  <div class="forum-card-footer-left col-6">
                    <p class="forum-author">Администрация</p>
                    <p class="forum-date">03/02/2019</p>
                  </div>
                  <div class="forum-card-footer-right col-6">
                    <p class="forum-comments">10 Комментариев</p>
                    <p class="forum-users">3 Учасника</p>
                  </div>
                </div>
              </li>
              <li class="forum-card medium-size-text">
                <p class="forum-card-text">
                  Есть предложение разделить кнопку вызова двух лифтов, идущих в
                  паркинг, и кнопку вызова лифта, не идущего в паркинг. Что вы
                  думаете по этому поводу?
                </p>
                <div class="forum-card-footer row small-size-text">
                  <div class="forum-card-footer-left col-6">
                    <p class="forum-author">Администрация</p>
                    <p class="forum-date">03/02/2019</p>
                  </div>
                  <div class="forum-card-footer-right col-6">
                    <p class="forum-comments">10 Комментариев</p>
                    <p class="forum-users">3 Учасника</p>
                  </div>
                </div>
              </li>
              <li class="forum-card medium-size-text">
                <p class="forum-card-text">
                  Есть предложение разделить кнопку вызова двух лифтов, идущих в
                  паркинг, и кнопку вызова лифта, не идущего в паркинг. Что вы
                  думаете по этому поводу?
                </p>
                <div class="forum-card-footer row small-size-text">
                  <div class="forum-card-footer-left col-6">
                    <p class="forum-author">Администрация</p>
                    <p class="forum-date">03/02/2019</p>
                  </div>
                  <div class="forum-card-footer-right col-6">
                    <p class="forum-comments">10 Комментариев</p>
                    <p class="forum-users">3 Учасника</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-6 zero-padding">
          <ForumChat/>
          </div>
        </div>
      </section>
    );
  }
}
export default ForumExpanded;
