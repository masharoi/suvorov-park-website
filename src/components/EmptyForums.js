import React, { Component } from "react";
import emptyForumImage from "../images/empty-forum.svg";
import CreateForumTitle from "./CreateForumTitle";

class EmptyForums extends Component {

  render() {
    return (
      <section id="forum" className="yellow-background empty-forum row small-row-reverse">
      <div className="col-md-4 col-12">
        <CreateForumTitle id="empty-forum-form"  />
        </div>
        <div id="empty-forum-image-outer" className="white-color large-size-text col-md-8 col-12">
          <img alt="" id="empty-forum-image" src={emptyForumImage} />
          <div>
            Форум пуст. <br/>Пока не было создано <br/> ни одного обсуждения!
          </div>
        </div>
      </section>
    );
  }
}

export default EmptyForums;
