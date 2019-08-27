import React, { Component } from "react";
import "../css/Forum.css";
import ForumChat from "./ForumChat";

class ForumExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedForumId: 0 };
  }

  handleForumCardClicked = el => {
    this.setState({ selectedForumId: el });
  };

  filterSelectedForum = (card) => {
    return card.id === this.state.selectedForumId;
  };

  render() {
    const messages = cardInformation.filter((card) =>
      this.filterSelectedForum(card)
    )[0].comments;

    return (
      <section id="forum-expanded">
        <div id="forum-back-button-container">
          <a id="forum-back-button" href="/profile">
            <i class="fas fa-long-arrow-alt-left" />
          </a>
        </div>
        <div class="row">
          <div class="col-6">
            <ul id="forum-list">
              {cardInformation.map(forum => (
                <li
                  key={forum.id}
                  class={"forum-card medium-size-text ".concat(
                    forum.id == this.state.selectedForumId ? "active-forum" : ""
                  )}
                  onClick={() => this.handleForumCardClicked(forum.id)}
                >
                  <p class="forum-card-text">{forum.topic}</p>
                  <div class="forum-card-footer row small-size-text">
                    <div class="forum-card-footer-left col-6">
                      <p class="forum-author">{forum.author}</p>
                      <p class="forum-date">{forum.date}</p>
                    </div>
                    <div class="forum-card-footer-right col-6">
                      <p class="forum-comments">
                        {forum.commentsCount} Комментариев
                      </p>
                      <p class="forum-users">{forum.usersCount} Учасника</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div class="col-6 zero-padding">
            <ForumChat messages={messages} />
          </div>
        </div>
      </section>
    );
  }
}
const cardInformation = [
  {
    id: 0,
    topic:
      "Есть предложение разделить кнопку вызова двух лифтов, идущих в паркинг, и кнопку вызова лифта, не идущего в паркинг. Что вы думаете по этому поводу?",
    author: "Администрация",
    date: "03/02/2019",
    commentsCount: 10,
    usersCount: 3,
    comments: [
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 20"
      },
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 21"
      },
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 22"
      }
    ]
  },
  {
    id: 1,
    topic:
      "Есть предложение разделить кнопку вызова двух лифтов, идущих в паркинг, и кнопку вызова лифта, не идущего в паркинг. Что вы думаете по этому поводу?",
    author: "Администрация",
    date: "03/02/2018",
    commentsCount: 10,
    usersCount: 3,
    comments: [
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 23"
      },
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 24"
      },
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 25"
      }
    ]
  },
  {
    id: 2,
    topic:
      "Есть предложение разделить кнопку вызова двух лифтов, идущих в паркинг, и кнопку вызова лифта, не идущего в паркинг. Что вы думаете по этому поводу?",
    author: "Администрация",
    date: "03/02/2017",
    commentsCount: 10,
    usersCount: 3,
    comments: [
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 26"
      },
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 27"
      },
      {
        comment:
          "Ириуре темпорибус про еу, граеци номинави ет яуи. Ад тале цоммодо еум, ехерци сентентиае ест ин, ат тибияуе сусципиантур меа.",
        commentAuthor: "Кв 28"
      }
    ]
  }
];

export default ForumExpanded;
