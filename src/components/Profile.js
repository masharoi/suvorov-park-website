import React from 'react';
import MyNavbar from './MyNavbar';
import MyFooter from "./MyFooter";
import Menu from "./Menu";

function Profile(props) {
  return (
    <div>
    <MyNavbar/>
    <Menu sideBarItems={sideBarItems} content={props.content} selectedLink={props.selectedLink}/>
    <MyFooter/>
    </div>
  );
}

var sideBarItems = [
  { id:0, title: "Общая информация", link: "/profile-general" },
  { id:1, title: "История начислений и оплат", link: "/circulation-sheet" },
  { id:2, title: "Квитанция на оплату коммунальных услуг", link: "/receipt" },
  { id:3, title: "Показания счетчиков", link: "/meter-data" },
  { id:4, title: "Оплатить услуги онлайн", link: "/payment" },
  { id:5, title: "Управление подпиской", link: "/subscription" }
];

export default Profile;
