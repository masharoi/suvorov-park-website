import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import ProfileForm from "./ProfileForm";
import Menu from "./Menu";
import "../css/Common.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function About(props) {
  return (
    <div>
      <MyNavbar />
      <Menu sideBarItems={sideBarItems} content={props.content} />
      <ProfileForm/>
      <MyFooter />
    </div>
  );
}
var sideBarItems = [
  { title: "О нас", link: "/about" },
  { title: "Новости", link: "/news" },
  { title: "Контакты", link: "/contacts" }
];
export default About;
