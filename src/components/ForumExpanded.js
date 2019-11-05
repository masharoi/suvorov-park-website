import React, { Component } from "react";
import "../css/Forum.css";
import ForumChat from "./ForumChat";
import LogIn from "./LogIn";

import makeRequest from "./Utils";
import Loader from "react-loader-spinner";

class ForumExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      forumInfo: [],
      isForumLoading: true
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
    this.setState({ forumInfo: json, isForumLoading: false });
  };

  updateWindowDimensions = () => {
    if (window.innerWidth >= 768) {
      window.localStorage.setItem("currentState", this.expanded);
    } else if (JSON.parse(window.localStorage.getItem("currentSelectedForum")) === -1) {
      window.localStorage.setItem("currentState", this.forum);
    }
     else if (window.localStorage.getItem("currentState") !== this.forum) {
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
    return card.id === JSON.parse(window.localStorage.getItem("currentSelectedForum"));
  };

  // set the view of the forum page depending on the screen size

  // control the visibility of the forum list
  setForumListView = () => {
    if (
      window.localStorage.getItem("currentState") === this.expanded ||
      window.localStorage.getItem("currentState") === this.forum
    ) {
      return "show";
    } else {
      return "hide";
    }
  };

  // control the visibility of the chat back button
  setChatBackView = () => {
    if (window.localStorage.getItem("currentState") === this.chat) {
      return "show";
    } else {
      return "hide";
    }
  };

  // control the visibility of the chat
  setChatView = () => {
    if (
      window.localStorage.getItem("currentState") === this.chat ||
      window.localStorage.getItem("currentState") === this.expanded
    ) {
      return "show";
    } else {
      return "hide";
    }
  };

  render() {
    const { isForumLoading } = this.state;
    var forumMessages;
    if (this.state.forumInfo.length !== 0) {
      if (JSON.parse(window.localStorage.getItem("currentSelectedForum")) === -1) {
        forumMessages = this.state.forumInfo[0].messages;
        window.localStorage.setItem(
          "currentSelectedForum",
          this.state.forumInfo[0].id
        );
      } else if (window.localStorage.getItem("isLoggedIn") !== "false") {
        forumMessages = this.state.forumInfo.filter(forum =>
          this.filterSelectedForum(forum)
        )[0].messages;
      }
    } else {
      forumMessages = [];
    }


    return (
      <div>
        {window.localStorage.getItem("isLoggedIn") === "false" ? (
          <LogIn />
        ) : (
          <div>
            {!isForumLoading ? (
              <section id="forum-expanded">
                <div
                  id="forum-back-button-container"
                  className={this.setForumListView()}
                >
                  <a id="forum-back-button" href="/profile#forum">
                    <i className="fas fa-long-arrow-alt-left" />
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 ">
                    <div className={this.setForumListView()}>
                      <ul id="forum-list">
                        {this.state.forumInfo.map(forum => (
                          <li
                            key={forum.id}
                            className={"forum-card medium-size-text ".concat(
                              forum.id ===
                                JSON.parse(window.localStorage.getItem(
                                  "currentSelectedForum"
                                ))
                                ? "active-forum"
                                : ""
                            )}
                            onClick={() =>
                              this.handleForumCardClicked(forum.id)
                            }
                          >
                            <p className="forum-card-text">{forum.title}</p>
                            <div className="forum-card-footer row small-size-text">
                              <div className="forum-card-footer-left col-6">
                                <p className="forum-author">{forum.author}</p>
                                <p className="forum-date">{forum.created_at}</p>
                              </div>
                              <div className="forum-card-footer-right col-6">
                                <p className="forum-comments">
                                  {forum.number_of_messages} Комментариев
                                </p>
                                <p className="forum-users">
                                  {forum.number_of_members} Учасника
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    id="forum-chat-outer"
                    className={"col-md-6 col-12 zero-padding " + this.setChatView()}
                  >
                    <div id="chat-back">
                      <a
                        id="forum-back-button"
                        onClick={this.handleChatBackClicked}
                      >
                        <i
                          className={
                            "fas fa-long-arrow-alt-left red-color " +
                            this.setChatBackView()
                          }
                        />
                      </a>
                    </div>
                    <ForumChat
                      chatId={window.localStorage.getItem(
                        "currentSelectedForum"
                      )}
                      messages={forumMessages}
                    />
                  </div>
                </div>
              </section>
            ) : (
              <div className="loader-container">
                <Loader
                  type="Rings"
                  color="#7d0000"
                  height={150}
                  width={150}
                  timeout={10000}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ForumExpanded;
