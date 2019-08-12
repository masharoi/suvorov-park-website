import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import ProfileForm from "./ProfileForm";
import "../css/Questions.css";

function Questions() {
  return (
    <div>
      <MyNavbar />
      <section class="row" id="questions">
        <div class="col-6">
          <div class="questions-form-col">
            <h2 id="questions-form-header">Задать вопрос</h2>
            <form id="questions-form">
              <input
                class="questions-input"
                type="text"
                name="user-name"
                placeholder="Имя"
              />
              <textarea class="questions-input" placeholder="Ваш Вопрос" />
              <input
                class="questions-input"
                type="text"
                name="address"
                placeholder="Адрес"
              />
              <input
                class="questions-input"
                type="text"
                name="phone-number"
                placeholder="Телефон"
              />

              <input class="secondary-button" type="submit" value="Отправить" />
            </form>
          </div>
        </div>

        <div class="col-6">
          <div class="questions-form-col">
            <h2 id="questions-form-header">Проверить статус вашего вопроса</h2>
            <form id="questions-form">
              <input
                class="questions-input"
                type="text"
                name="user-name"
                placeholder="Номер Вопроса"
              />

              <input class="secondary-button" type="submit" value="Проверить" />
            </form>
          </div>
        </div>
      </section>
      <ProfileForm />
      <MyFooter />
    </div>
  );
}

export default Questions;
