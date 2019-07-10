import React from "react";
import "../css/ContactsPreview.css";
import { Link } from "react-router-dom";

function ContactsPreview() {
  return (
    <section id="contacts-preview">
      <h3>ТСЖ "СУВОРОВ ПАРК"</h3>
      <div class="contacts-preview-item">
        <div class="contacts-header">Адрес:</div>  <div>ул. Малая Филевская, д.40, корп.1, этаж 23, пом 1{" "}
        <br /> 121433, г.Москва</div>
      </div>
      <br/>
      <div class="contacts-preview-item">
        <div class="contacts-header">Телефон:</div> <div> 89265388846 <br/> 89265388846 (диспетчерская) </div> <br/>
        <Link class="link" to="/contacts">Подробнее <i class="fas fa-chevron-right"></i></Link>
      </div>
    </section>
  );
}
export default ContactsPreview;
