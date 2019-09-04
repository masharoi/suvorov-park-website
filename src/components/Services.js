import React from "react";
import "../css/Services.css";
import Dropdown from "react-bootstrap/Dropdown";

function Services() {
  return (
    <section id="services" class="green-background">
      <div class="row">
        <div class="col-12 col-md-6" id="services-action-col">
          <select name="services-list" class="service-interaction green-background yellow-color" id="service-select" form="service-form">
          {services.map((item) =>
            <option class="service-option">{item.service}</option>
          )}
          </select>
          <form action="/action_page.php" id="service-form">
          <textarea
            class="medium-size-text gray-background"
            placeholder="Дополнительная информация"
          />
            <input id="service-button" class="service-interaction yellow-background green-color" type="submit" value="Заказать услугу"/>
          </form>
        </div>
        <div class="col-6" id="services-illustration">

        </div>
      </div>
    </section>
  );
}

const services = [
  {id:0, service:"Вызов сантехника"},
  {id:1, service:"Вызов электрика"},
  {id:2, service:"Клининг"}
]

export default Services;
