
import React from "react";
import "../css/ContactsPreview.css";
import { Link } from "react-router-dom";

function ContactsPreview() {
  return (
    <section id="contacts-preview">
      <h2>ТСЖ "Суворов Парк"</h2>
      <div class="contacts-preview-item">
        <div class="contacts-header">Адрес:</div>  <div>ул. Малая Филевская, д.40, корп.1, этаж 23, пом 1{" "}
        <br /> 121433, г.Москва</div>
      </div>
      <br/>
    </section>
  );
}
export default ContactsPreview;
