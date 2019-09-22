import React from "react";
import "../css/Error.css";

export default class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="error-container">
        <div>
          <h1 id="error-message" class="green-color large-size-text">Что-то пошло не так.</h1>
          <a id="error-button" href="/home" class="orange-background white-color medium-size-text">На главную</a>
        </div>
      </section>
    );
  }
}
