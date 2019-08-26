import React from "react";
import "../css/Services.css";
import Dropdown from "react-bootstrap/Dropdown";

function Services() {
  return (
    <section id="services" class="green-background">
      <div class="row">
        <div class="col-6" id="services-action-col">
          <select name="services-list" class="service-interaction green-background yellow-color" id="service-select" form="service-form">
            <option class="service-option red-background">Вызов сантехника</option>
            <option class="service-option">Вызов электрика</option>
            <option class="service-option">Клининг</option>
          </select>
          <form action="/action_page.php" id="service-form">
            <input id="service-button" class="service-interaction yellow-background green-color" type="submit" value="Заказать услугу"/>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Services;
