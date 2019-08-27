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
        {this.props.messages.map((message) =>
          <li class="comment">
            <p class="comment-text">
              {message.comment}
            </p>
            <p class="comment-author">{message.commentAuthor}</p>
          </li>
        )}
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
