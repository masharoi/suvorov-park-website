import React from "react";
import "../css/Contacts.css";

function Contacts() {
  return (
    <section id="contacts">
      <div id="contacts-general">
        <div id="map" />
        <div id="general-contact-info">
          <span class="contacts-header"> Адрес: </span> <br />
          <p>
            ул. Малая Филевская, д. 40, корп.1, этаж 23, пом 1 <br />
            121433, г. Москва
          </p>
          <span class="contacts-header"> Телефон: </span> <br />
          <p>
            89265388846 <br />
            89265388846 (диспетчерская)
          </p>
          <span class="contacts-header"> E-Mail: </span>
          <p> tsg.suvorov@mail.ru</p>
        </div>
      </div>
      <div id="contacts-lower">
        <div id="bank-details">
          <span class="contacts-header"> Реквизиты организации: </span> <br />
          <span class="contacts-header"> ИНН:</span>
          <p>7731394339</p>
          <span class="contacts-header"> КПП:</span>
          <p>773101001</p>
          <span class="contacts-header"> Расч. счет: </span>
          <p>
            {" "}
            40703810638000009084 <br /> Московский банк Сбербанка России ОАО
            (БИК 044525225)
          </p>
          <span class="contacts-header"> Кор. счет: </span>
          <p> 30101810400000000225</p>
          <span class="contacts-header">Юр. адрес: </span>
          <p>
            {" "}
            ул. Малая Филевская, д. 40, корп.1, этаж 23, пом 1 <br />
            121433, г. Москва
          </p>
          <span class="contacts-header">Руководитель: </span>
          <p> Зайцев Илья Григорьевич</p>
        </div>
        <div class="contact-form-outer" style={{ background: "#f6f6f6" , borderRadius:"5px", padding:"20px", margin:"20px"}}>
          <h2 class="contact-form-header">
          Написать нам:
          </h2>
          <form class="contact-form">
            <input type="text" name="name" placeholder="Ваше Имя" />
            <input type="email" name="name" placeholder="Ваш E-mail" />
            <textarea placeholder="Текст Сообщения" />
            <input
              id="submit-button"
              class="submit-button"
              type="submit"
              value="Отправить"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
