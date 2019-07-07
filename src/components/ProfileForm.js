import React from "react";
import "../css/ProfileForm.css";

function ProfileForm() {
  return (
    <section id="profile-form-outer">

      <div class="row" id="profile-row">
        <div class="col-12 col-md-5" id="profile-form-col">
          <h2 id="profile-form-header">Войти в личный кабинет</h2>
          <form id="profile-form">
            <input type="text" name="login" placeholder="Логин" />
            <input
              type="password"
              name="profile-password"
              placeholder="Пароль"
            />
          <div id="profile-checkbox">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-cb"
              value="remember-me"
            />
            <label id="checkbox-label" for="remember-cb">
              Запомнить меня на этом устройстве
            </label>
            </div>
            <input id="submit-button" class="submit-button" type="submit" value="Войти" />
          </form>
        </div>

        <div class="col-12 col-md-7" id="profile-form-text">
        <h3 id="profile-text-header">После авторизации на сайте с помощью личного кабинета вы сможете:</h3>
          <p class="profile-text-item">Посмотреть баланс лицевого счета</p>
          <p class="profile-text-item">Передать показания</p>
          <p class="profile-text-item">Распечатать квитанцию</p>
          <p class="profile-text-item">Отправить заявку в аварийно-диспетчерскую службу</p>
          <p class="profile-text-item">Написать в книгу жалоб и предложений</p>
        </div>
      </div>
    </section>
  );
}
export default ProfileForm;
