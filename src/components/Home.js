import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import Images from "./Images";
import "../css/Common.css";
import About from "./About";
import Contacts from "./Contacts";

function Home() {
  return (
    <div>
      <MyNavbar />
      <Images />
      <About/>
      <Contacts/>
      <MyFooter isHome={true}/>
    </div>
  );
}

export default Home;
