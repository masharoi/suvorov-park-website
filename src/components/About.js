import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import ProfileForm from "./ProfileForm";
import MyCarousel from "./MyCarousel";
import "../css/Common.css";

function About() {
  return (
    <div>
      <MyNavbar />
      <MyCarousel/>
      <ProfileForm />
      <MyFooter />
    </div>
  );
}

export default About;
