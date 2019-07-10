import React from 'react';
import MyNavbar from './MyNavbar';
import MyFooter from "./MyFooter";
import ProfileForm from "./ProfileForm";
import Menu from "./Menu";

function Homes(props) {
  return (
    <div>
    <MyNavbar/>
    <Menu sideBarItems={sideBarItems} content={props.content} />
    <ProfileForm/>
    <MyFooter />
    </div>
  );
}
var sideBarItems = [
  { id:1, title: "Общая информация", link: "/homes-general" },
  { id:2, title: "Фотогалерея", link: "/photogallery" },
  { id:3, title: "Видео", link: "/video" },
  { id:4, title: "Форум", link: "/forum" },
  { id:5, title: "Блоги", link: "/blogs" },
  { id:6, title: "Должники", link: "/debts" }
];
export default Homes;
