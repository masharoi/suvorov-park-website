import React from "react";
import "../css/Footer.css";

function MyFooter() {
  return (
    <section id="footer" class="row">
      <div class="col-md-6 col-12">
        <h2 id="contacts-main-header">Контакты</h2>

        <div id="contacts-info" class="row">
          <p class="contacts-item col-12 col-md-6">
            <span class="contacts-header">Диспетчерская</span> <br /> 8 (499)
            146-05-13 Охрана (круглосуточно) <br /> 8 (977) 637-15-29 Губарев
            Виктор Михайлович
          </p>
          <p class="contacts-item">
            <span class="contacts-header col-12 col-md-3">Бухгалтерия</span>
            <br />8 (926) 538-88-46 (с 10:00 до 18:00)
          </p>
          <p class="contacts-item col-12">
            <span class="contacts-header">Председатель УК</span> <br />
            tsg.suvorov@mail.ru <br /> Зайцев Илья Григорьевич
          </p>
        </div>
      </div>

      <div class="col-md-6 col-12">
        <h2 id="footer-form-header">Обратная связь</h2>
        <form id="footer-form">
          <input type="text" name="name" placeholder="Ваше Имя"/>
          <input type="email" name="name" placeholder="Ваше E-mail"/>
          <textarea placeholder="Текст Сообщения"/>
          <input id="submit-button" type="submit" value="Отправить" />
        </form>
      </div>
    </section>
  );
}

export default MyFooter;
