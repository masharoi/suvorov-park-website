import React, { Component } from "react";
import "../css/Forum.css";

import makeRequest from "./Utils";

class ForumExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:""
    }
  }

  handleResponse = (json) => {
    window.location.reload();
  }

  handleAddComment = event => {
    event.preventDefault();
    const { messageText } = event.target;
    const message = {text: messageText.value}
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/forum/" + this.props.chatId + "/message",
      this.handleResponse
    );
    this.setState({value: ""});
  }

  handleChange = event => {
     this.setState({value: event.target.value});
  }

  render() {
    return (
      <section id="forum-chat">
        <ul id="comment-list" class="medium-size-text">
        {this.props.messages.map((message) =>
          <li class="comment">
            <p class="comment-text">
              {message.text}
            </p>
            <p class="comment-author">{message.user}</p>
          </li>
        )}
        </ul>

        <form id="comment-input" onSubmit={this.handleAddComment}>
          <div id="comment-text-input-outer">
            <input
              id="comment-text-input"
              class="medium-size-text"
              type="text"
              name="messageText"
              value={this.state.value}
              placeholder="Напишите сообщение"
              onChange={this.handleChange}
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
