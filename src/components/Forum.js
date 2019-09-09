import React from "react";
import "../css/Forum.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import makeRequest from "./Utils";

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  handleForumPreviewClicked = (id) => {
    window.localStorage.setItem("currentSelectedForum", id);
    window.location = "/full-forum";
  }

  handleAllForumsClicked = () => {
      window.localStorage.setItem("currentSelectedForum", -1);
  }

  handleResponse = json => {
   alert(JSON.stringify(json))
     this.setState({value: ""});
  };

  handleCreateForumClicked = event => {
    event.preventDefault();
    const { forumTitle } = event.target;
    const message = { title: forumTitle.value };
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/forum/",
      this.handleResponse
    );
  };

  componentDidMount() {
  //  makeRequest(null, "get", "/api/services/", this.handleResponse);
  }

  handleValueChanged = event => {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <section id="forum" class="yellow-background">
        <div id="forum-link" onClick={this.handleAllForumsClicked} class="large-screen">
          <a href="/full-forum" id="forum-link-text" class="white-color link bold medium-size-text">
            Все обсуждения
          </a>
          <i class="fas fa-long-arrow-alt-right white-color medium-size-text" id="forum-link-icon" />
        </div>
        <div class="row">
          <div class="col-12 col-md-4" id="forum-form-outer">
            <form id="forum-form" onSubmit={this.handleCreateForumClicked}>
              <textarea
                id="forum-text"
                class="medium-size-text"
                placeholder="Тема для обсуждения"
                name="forumTitle"
                value={this.state.value}
                onChange={this.handleValueChanged}
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
          {forumPreviewInfo.map(preview =>
            <div class="forum-preview-item" onClick={() => this.handleForumPreviewClicked(preview.id)}>
              <div class="medium-size-text">
                {preview.header}
              </div>
              <div class="orange-color bold small-size-text">Подробнее</div>
            </div>
          )}
          </div>
        </div>
        <div id="forum-link" class="small-screen">
          <a href="/full-forum" id="forum-link-text" class="white-color link bold medium-size-text">
            Все обсуждения
          </a>
          <i class="fas fa-long-arrow-alt-right white-color medium-size-text" id="forum-link-icon" />
        </div>
      </section>

    )
  }
}

const forumPreviewInfo = [
  {id:0,
    header: "0 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {id:1,
    header: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {id:2,
    header: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  }
]

export default Forum;
