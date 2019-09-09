import React from "react";
import "../css/About.css";
import { Link } from "react-router-dom";
import makeRequest from "./Utils";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutText: ""
    }
  }
  handleResponse = json => {
    this.setState({ aboutText: json.about });
  };

  componentDidMount() {
    makeRequest(null, "get", "/api/common/general-configuration", this.handleResponse);
  }

  render() {
    return (
      <section id="about" class="yellow-background">
        <div id="about-info">
          <h2 class="large-size-text">О нас</h2>
          <p class="medium-size-text">
          {this.state.aboutText}
          </p>
        </div>
      </section>
    );
  }
}
export default About;
