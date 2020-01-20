import React from "react";
import "../css/AboutUser.css";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="about-user" class="gray-background">
        <div id="profile-img"></div>
      </div>
    );
  }
}
