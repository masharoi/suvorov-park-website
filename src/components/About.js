import React from "react";
import "../css/About.css";

class About extends React.Component {
  render() {
    return (
      <section id="about" class="green-background yellow-color">
        <div id="about-info">
          <h2 >О нас</h2>
          <p >
          {this.props.text}
          </p>
        </div>
      </section>
    );
  }
}
export default About;
