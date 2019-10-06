import React from "react";
import "../css/Forum.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import makeRequest from "./Utils";
import Loader from "react-loader-spinner";

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showTextFailed: false,
      showErrorMessage: false,
      showSuccessMessage: false,
      isLoading: false
    };
  }
  handleForumPreviewClicked = id => {
    window.localStorage.setItem("currentSelectedForum", id);
    window.localStorage.setItem("currentState", this.chat);
    window.location = "/full-forum";
  };

  handleAllForumsClicked = () => {
    window.localStorage.setItem("currentSelectedForum", -1);
  };

  handleResponse = json => {
    this.setState({ value: "", showErrorMessage: false, showSuccessMessage: true, isLoading:false  });
  };

  handleCreateForumClicked = event => {
    event.preventDefault();
    const { forumTitle } = event.target;
    if (forumTitle.value.length === 0) {
      this.setState({ showErrorMessage: true });
      return;
    }
    const message = { title: forumTitle.value };
    this.setState({isLoading:true})
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/forum/",
      this.handleResponse
    );
  };

  handleValueChanged = event => {
    this.setState({ value: event.target.value });
  };

  validateTitle = () => {
    if (this.state.value.length === 0) {
      this.setState({ showTextFailed: true });
    } else {
      this.setState({ showTextFailed: false });
    }
  };

  setPreviewText = text => {
    if (text.length > 70) {
      return text.substring(0, 70) + "...";
    }
    return text;
  };

  setError = isError => {
    if (isError) {
      return "error-input";
    }
    return "";
  };

  render() {
    const { showTextFailed, showErrorMessage, showSuccessMessage, isLoading } = this.state;
    return (
      <section id="forum" class="yellow-background">
        <div id="forum-link" onClick={this.handleAllForumsClicked}>
          <a
            href="/full-forum"
            id="forum-link-text"
            class="white-color link bold medium-size-text"
          >
            Все обсуждения
          </a>
          <i
            class="fas fa-long-arrow-alt-right white-color medium-size-text"
            id="forum-link-icon"
          />
        </div>
        <div class="row">
          <div class="col-12 col-md-4" id="forum-form-outer">
          {showSuccessMessage ? (
            <h3 class="small-size-text white-color footer-message">
              Ваш форум создан!
            </h3>
          ) : null}
          {showErrorMessage ? (
            <h3 class="small-size-text white-color footer-message">
              Все поля должны быть заполнены!
            </h3>
          ) : null}
            <form id="forum-form" onSubmit={this.handleCreateForumClicked}>
              <textarea
                id="forum-text"
                class={"medium-size-text " + this.setError(showTextFailed)}
                placeholder="Тема для обсуждения"
                name="forumTitle"
                value={this.state.value}
                onChange={this.handleValueChanged}
                onBlur={this.validateTitle}
              />
              <div class="button button-container orange-background">
              <input
                id="forum-button"
                class="medium-size-text button white-color"
                type="submit"
                value="Создать"
              />
              {isLoading ? (
                <Loader
                  class="button-loader"
                  type="Rings"
                  color="white"
                  height={40}
                  width={50}
                  timeout={100000}
                />
              ) : null}
              </div>
            </form>

          </div>
          <div class="col-12 col-md-8" id="forum-preview-container">
            {this.props.forumPreviewList.map(preview => (
              <div
                class="forum-preview-item"
                onClick={() => this.handleForumPreviewClicked(preview.id)}
              >
                <div class="medium-size-text">
                  {this.setPreviewText(preview.title)}
                </div>
                <div class="orange-color bold small-size-text">Подробнее</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Forum;
