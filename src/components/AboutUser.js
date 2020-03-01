import React from "react";
import "../css/AboutUser.css";

export default class AboutUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.userData)
    return (
      <div id="about-user" class="gray-background">
        <div class="row" id="user-container">
          <div id="left-inner" class="col-12 col-md-6">
            <div id="profile-img">
              <i id="user-icon" class="fas fa-user"></i>
            </div>
            <div id="user-info">
              <div> {this.props.userData.first_name} {this.props.userData.patronymic} </div>
              <div> квартира # {this.props.userData.apartment_number} </div>
              <a
                class="medium-size-text orange-color medium"
                id="change-pwd-btn"
                href="/reset-password"
              >
                Сменить пароль
              </a>
            </div>
          </div>
          <div class="col-6 small-hide">
            <div id="right-inner">
              <div id="user-text">
                {this.props.userData.first_name} {this.props.userData.patronymic},
                <br /> добро пожаловать в ваш личный кабинет! Здесь вы можете
                заказывать услуги ТСЖ, принимать участие в голосавании, смотреть
                новости и учавствовать в форуме.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
