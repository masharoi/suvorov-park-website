import React from "react";
import "../css/Forum.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function Forum(props) {
  return (
    <section>
      <div id="forum-tabs">
        {forumTabs.map((item, i) => (
          <Link id={i} to={item.link} className="forum-tab">
            {item.title}
          </Link>
        ))}
      </div>
      <div>{props.content}</div>
    </section>
  );
}

const forumTabs = [
  { title: "Поиск", link: "/search-forums", content: "search" },
  { title: "Правила", link: "/forum-rules", content: "rules" },
  { title: "Войти", link: "/forum-login", content: "login" }
];

export default Forum;
