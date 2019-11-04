import React from "react";
import "../css/Forum.css";
import CreateForumTitle from "./CreateForumTitle";


class Forum extends React.Component {

  handleForumPreviewClicked = id => {
    window.localStorage.setItem("currentSelectedForum", id);
    window.localStorage.setItem("currentState", this.chat);
    window.location = "/full-forum";
  };

  handleAllForumsClicked = () => {
    window.localStorage.setItem("currentSelectedForum", -1);
  };

  setPreviewText = text => {
    if (text.length > 70) {
      return text.substring(0, 70) + "...";
    }
    return text;
  };



  render() {
    return (

      <section id="forum" className="yellow-background">
        <div id="forum-link" onClick={this.handleAllForumsClicked}>
          <a
            href="/full-forum"
            id="forum-link-text"
            className="white-color link bold medium-size-text"
          >
            Все обсуждения
          </a>
          <i
            className="fas fa-long-arrow-alt-right white-color medium-size-text"
            id="forum-link-icon"
          />
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <CreateForumTitle />
          </div>
          <div className="col-12 col-md-8" id="forum-preview-container">
            {this.props.forumPreviewList.map(preview => (
              <div
               key={preview.id}
                className="forum-preview-item"
                onClick={() => this.handleForumPreviewClicked(preview.id)}
              >
                <div className="medium-size-text">
                  {this.setPreviewText(preview.title)}
                </div>
                <div className="orange-color bold small-size-text">Подробнее</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Forum;
