import React from "react";
import "../css/Forum.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function Forum() {
  return (
    <section id="forum" class="yellow-background">
    <div class="row">
    <div class="col-5">
    <form class="contact-form">
      <textarea placeholder="Тема для обсуждения"/>
      <input id="submit-button" class="orange-background white-color" type="submit" value="Создать" />
    </form>
    </div>
    </div>
    </section>
  );
}

export default Forum;
