import React from "react";
import "../css/Contacts.css";
import map from '../images/map.png';

function Contacts() {
  return (
    <section id="contacts">
    <img id="map" src={map} />
    <div class="contact-form-outer">
      <h2 class="contact-form-header large-size-text">
      Написать нам:
      </h2>
      <form class="contact-form">
        <input class="gray-background medium-size-text" type="text" name="name" placeholder="Ваше Имя" />
        <input class="gray-background medium-size-text" type="email" name="name" placeholder="Ваш E-mail" />
        <textarea class="gray-background medium-size-text" placeholder="Текст Сообщения" />
        <input
          class="orange-background green-color primary-button-size medium-size-text"
          type="submit"
          value="Отправить"
        />
      </form>
    </div>
    </section>
  );
}

export default Contacts;
