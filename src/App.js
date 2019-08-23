import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import AllNews from "./components/AllNews";
import Forum from "./components/Forum";
import Services from "./components/Services";
import ForumHome from "./components/ForumHome";
import ForumSearch from "./components/ForumSearch";
import ForumRules from "./components/ForumRules";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route path="/profile" component={main} />

        </div>
      </Router>
    </div>
  );
}
const home = () => <Home />;
const main = () => <Main/>


export default App;
