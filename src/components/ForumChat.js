import React, { Component } from "react";
import "../css/Forum.css";

class ForumExpanded extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="forum-chat">
        <ul id="comment-list" class="medium-size-text">
          <li class="comment">
            <p class="comment-text">
              Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо
              еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.
            </p>
            <p class="comment-author">Кв 20</p>
          </li>
          <li class="comment">
            <p class="comment-text">
              Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо
              еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.
            </p>
            <p class="comment-author">Кв 20</p>
          </li>
          <li class="comment">
            <p class="comment-text">
              Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо
              еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.
            </p>
            <p class="comment-author">Кв 20</p>
          </li>
        </ul>

        <form id="comment-input">
          <div id="comment-text-input-outer">
            <input
              id="comment-text-input"
              class=" medium-size-text"
              type="text"
              placeholder="Напишите сообщение"
            />
          </div>
          <div>
            <button
            id="comment-input-button"
              class="red-color large-size-text"
              type="submit"
            ><i class="fas fa-paper-plane"></i></button>
          </div>
        </form>
      </section>
    );
  }
}
export default ForumExpanded;
