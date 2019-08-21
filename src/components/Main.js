import React from "react";
import Services from "./Services";
import MyNavbar from "./MyNavbar";
import AllNews from "./AllNews";
import Vote from "./Vote";
import MyFooter from "./MyFooter";

function Main() {
  return (
    <div>
    <MyNavbar/>
    <Services/>
    <AllNews/>
    <Vote/>
    <MyFooter/>
    </div>
  );
}

export default Main;
