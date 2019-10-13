import React, { Component } from "react";
import "../css/Forum.css";
import "../css/ForumChat.css";
import makeRequest from "./Utils";

class ForumExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleResponse = json => {
    window.location.reload();
  };

  handleAddComment = event => {
    event.preventDefault();
    const { messageText } = event.target;
    const message = { text: messageText.value };
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/forum/" + this.props.chatId + "/message",
      this.handleResponse
    );
    this.setState({ value: "" });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  scrollToBottom = () => {
    if (this.messagesEnd != null)  {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messageInput = (
      <form id="comment-input" onSubmit={this.handleAddComment}>
        <div id="comment-text-input-outer">
          <input
            id="comment-text-input"
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
          >
            <i class="fas fa-paper-plane" />
          </button>
        </div>
      </form>
    );
    const emptyScreen = (
      <div>
        <div id="empty-chat-container">
          <h2 class="green-color medium-size-text">
            На этом форуме пока нет сообщений.
          </h2>
        </div>
      </div>
    );

    const messagesSize = this.props.messages.length;
    return (
      <section id="forum-chat">

        {messagesSize == 0 ? emptyScreen : (
          <div id="comments-list-outer">
            <ul id="comment-list" class="medium-size-text">
              {this.props.messages.map(message => (
                <li class="comment">
                  <p class="comment-text">{message.text}</p>
                  <p class="comment-author">{message.user}</p>
                </li>
              ))}
            </ul>
            <div style={{ float:"left", clear: "both" }}
              ref={el => {
                this.messagesEnd = el;
              }}
            ></div>

          </div>

        )}

        {messageInput}
      </section>
    );
  }
}
export default ForumExpanded;
