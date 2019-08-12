import React from 'react';
import MyNavbar from './MyNavbar';
import MyFooter from "./MyFooter";
import ProfileForm from "./ProfileForm";
import Menu from "./Menu";

function Homes(props) {
  return (
    <div>
    <MyNavbar/>
    <Menu sideBarItems={sideBarItems} content={props.content} selectedLink={props.selectedLink}/>
    <ProfileForm/>
    <MyFooter />
    </div>
  );
}
var sideBarItems = [
  { id:0, title: "Общая информация", link: "/homes-general" },
  { id:1, title: "Фотогалерея", link: "/photogallery" },
  { id:2, title: "Видео", link: "/video" },
  { id:3, title: "Форум", link: "/forum" },
  { id:4, title: "Блоги", link: "/blogs" },
  { id:5, title: "Должники", link: "/debts" }
];
export default Homes;
