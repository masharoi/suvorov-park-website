import React from "react";
import "../css/About.css";
import ContactsPreview from "./ContactsPreview";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about">
    <div id="about-info">
      <h2>О нас</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

        <Link class="link" to="/news">Все новости УК<i class="fas fa-chevron-right"></i></Link>
        </div>
      <ContactsPreview />
    </section>
  );
}
export default About;
