import React, { Component } from "react";
import "../css/Forum.css";
import ForumChat from "./ForumChat";

import makeRequest from "./Utils";

class ForumExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      forumInfo: []
    };
    this.expanded = "expanded";
    this.chat = "chatOnly";
    this.forum = "forumListOnly";
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    makeRequest(null, "get", "/api/forum/", this.handleResponse);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  handleResponse = json => {
    this.setState({ forumInfo: json });
  };

  updateWindowDimensions = () => {
    if (window.innerWidth >= 768) {
      window.localStorage.setItem("currentState", this.expanded);
    } else if (window.localStorage.getItem("currentState") != this.forum) {
      window.localStorage.setItem("currentState", this.chat);
    }
    this.setState({ width: window.innerWidth });
  };

  // handle forum interactions

  handleForumCardClicked = el => {
    if (this.state.width < 768) {
      window.localStorage.setItem("currentState", this.chat);
    }
    window.localStorage.setItem("currentSelectedForum", el);
    window.location.reload();
  };

  handleChatBackClicked = () => {
    window.localStorage.setItem("currentState", this.forum);
    window.location.reload();
  };

  filterSelectedForum = card => {
    return card.id == window.localStorage.getItem("currentSelectedForum");
  };

  // set the view of the forum page depending on the screen size

  // control the visibility of the forum list
  setForumListView = () => {
    if (
      window.localStorage.getItem("currentState") == this.expanded ||
      window.localStorage.getItem("currentState") == this.forum
    ) {
      return "show";
    } else {
      return "hide";
    }
  };

  // control the visibility of the chat back button
  setChatBackView = () => {
    if (window.localStorage.getItem("currentState") == this.chat) {
      return "show";
    } else {
      return "hide";
    }
  };

  // control the visibility of the chat
  setChatView = () => {
    if (
      window.localStorage.getItem("currentState") == this.chat ||
      window.localStorage.getItem("currentState") == this.expanded
    ) {
      return "show";
    } else {
      return "hide";
    }
  };

  render() {
    var forumMessages;
    if (this.state.forumInfo.length != 0) {
      if (window.localStorage.getItem("currentSelectedForum") == -1) {
        forumMessages = this.state.forumInfo[0].messages;
        window.localStorage.setItem(
          "currentSelectedForum",
          this.state.forumInfo[0].id
        );
      } else {
        forumMessages = this.state.forumInfo.filter(forum =>
          this.filterSelectedForum(forum)
        )[0].messages;
      }
    } else {
      forumMessages = [];
    }

    return (
      <section id="forum-expanded">
        <div id="forum-back-button-container" class={this.setForumListView()}>
          <a id="forum-back-button" href="/profile#forum">
            <i class="fas fa-long-arrow-alt-left" />
          </a>
        </div>
        <div class="row">
          <div class="col-md-6 col-12 ">
            <div class={this.setForumListView()}>
              <ul id="forum-list">
                {this.state.forumInfo.map(forum => (
                  <li
                    key={forum.id}
                    class={"forum-card medium-size-text ".concat(
                      forum.id ==
                        window.localStorage.getItem("currentSelectedForum")
                        ? "active-forum"
                        : ""
                    )}
                    onClick={() => this.handleForumCardClicked(forum.id)}
                  >
                    <p class="forum-card-text">{forum.title}</p>
                    <div class="forum-card-footer row small-size-text">
                      <div class="forum-card-footer-left col-6">
                        <p class="forum-author">{forum.author}</p>
                        <p class="forum-date">{forum.created_at}</p>
                      </div>
                      <div class="forum-card-footer-right col-6">
                        <p class="forum-comments">
                          {forum.number_of_messages} Комментариев
                        </p>
                        <p class="forum-users">
                          {forum.number_of_members} Учасника
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="forum-chat-outer" class="col-md-6 col-12 zero-padding">
            <div id="chat-back">
              <a id="forum-back-button" onClick={this.handleChatBackClicked}>
                <i
                  class={
                    "fas fa-long-arrow-alt-left red-color " +
                    this.setChatBackView()
                  }
                />
              </a>
            </div>
            <ForumChat
              class={this.setChatView()}
              chatId={window.localStorage.getItem("currentSelectedForum")}
              messages={forumMessages}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ForumExpanded;
