import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import ProfileForm from "./ProfileForm";
import Menu from "./Menu";
import "../css/Common.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function Company(props) {
  return (
    <div>
      <MyNavbar />
      <Menu sideBarItems={sideBarItems} content={props.content} selectedLink={props.selectedLink}/>
      <ProfileForm/>
      <MyFooter />
    </div>
  );
}
var sideBarItems = [
  { id:0, title: "О нас", link: "/about" },
  { id:1, title: "Новости", link: "/news" },
  { id:2, title: "Контакты", link: "/contacts" }
];
export default Company;
