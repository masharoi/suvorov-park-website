import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import MyCarousel from "./MyCarousel";
import "../css/Common.css";
import About from "./About";

function Home() {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <About/>
      <MyFooter />
    </div>
  );
}

export default Home;
