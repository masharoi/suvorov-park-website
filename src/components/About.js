import React from "react";
import "../css/About.css";

class About extends React.Component {
  render() {
    return (
      <section id="about" class="yellow-background">
        <div id="about-info">
          <h2 class="large-size-text">О нас</h2>
          <p class="medium-size-text">
          {this.props.text}
          </p>
        </div>
      </section>
    );
  }
}
export default About;
