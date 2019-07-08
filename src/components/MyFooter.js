import React from "react";
import "../css/Footer.css";

function MyFooter() {
  return (
    <section id="footer" class="row">
      <div class="col-lg-7 col-md-6 col-12" id="contacts-outer">
        <h2 id="contacts-main-header">Контакты</h2>

        <div id="contacts-info" class="row">
          <p class="contacts-item col-12 col-lg-6">
            <span class="contacts-header">Диспетчерская</span> <br /> 8 (499)
            146-05-13 Охрана (круглосуточно) <br /> 8 (977) 637-15-29 Губарев
            Виктор Михайлович
          </p>
          <p class="contacts-item col-12 col-lg-6">
            <span class="contacts-header">Бухгалтерия</span>
            <br />8 (926) 538-88-46 (с 10:00 до 18:00)
          </p>
          <p class="contacts-item col-12">
            <span class="contacts-header">Председатель УК</span> <br />
            tsg.suvorov@mail.ru <br /> Зайцев Илья Григорьевич
          </p>
        </div>
      </div>

      <div class="col-lg-5 col-md-6  col-12 contact-form-outer">
        <h2 class="contact-form-header">Обратная связь</h2>
        <form class="contact-form">
          <input type="text" name="name" placeholder="Ваше Имя"/>
          <input type="email" name="name" placeholder="Ваш E-mail"/>
          <textarea placeholder="Текст Сообщения"/>
          <input id="submit-button" class="submit-button" type="submit" value="Отправить" />
        </form>
      </div>
    </section>
  );
}

export default MyFooter;
