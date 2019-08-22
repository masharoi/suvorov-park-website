import React from "react";
import "../css/Footer.css";

function MyFooter(props) {
  const form = (
    <div class="col-lg-4  col-12 contact-form-outer">
      <h2 class="contact-form-header large-size-text">Обратная связь</h2>
      <form class="contact-form">
        <input class="medium-size-text gray-background" type="text" name="name" placeholder="Ваше Имя" />
        <textarea class="medium-size-text gray-background" placeholder="Текст Сообщения" />
        <input class="medium-size-text primary-button-size yellow-background green-color" type="submit" value="Отправить" />
      </form>
    </div>
  );
  return (
    <section id="footer" class="row white-color">
      <div class="col-lg-4 col-md-6 col-12" id="contacts-outer">
        <h2 id="contacts-main-header" class="large-size-text">
          Контакты
        </h2>

        <div id="contacts-info" class="row">
          <p class="contacts-item col-12 small-size-text">
            <span class="contacts-header medium-size-text">Диспетчерская</span>{" "}
            <br /> 8 (499) 146-05-13 Охрана (круглосуточно) <br /> 8 (977)
            637-15-29 Губарев Виктор Михайлович
          </p>
          <p class="contacts-item col-12 small-size-text">
            <span class="contacts-header medium-size-text">Бухгалтерия</span>
            <br />8 (926) 538-88-46 (с 10:00 до 18:00)
          </p>
          <p class="contacts-item col-12 small-size-text">
            <span class="contacts-header medium-size-text">
              Председатель УК
            </span>{" "}
            <br />
            tsg.suvorov@mail.ru <br /> Зайцев Илья Григорьевич
          </p>
        </div>
      </div>
      {!props.isHome ? form : <div />}
      <div class="col-lg-4 col-12 address">
        <h2 class="large-size-text">ТСЖ "Суворов Парк"</h2>
        <div class="contacts-preview-item small-size-text">
          <div class="contacts-header medium-size-text">Адрес:</div>
          <div>
            ул. Малая Филевская, д.40, корп.1, этаж 23, пом 1 <br /> 121433,
            г.Москва
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyFooter;
