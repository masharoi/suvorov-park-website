import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import AllNews from "./components/AllNews";
import ContactsPreview from "./components/ContactsPreview";
import Forum from "./components/Forum";
import ForumHome from "./components/ForumHome";
import ForumSearch from "./components/ForumSearch";
import ForumRules from "./components/ForumRules";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route path="/services" component={home} />
          <Route path="/vote" component={home} />
          <Route path="/forum" component={home} />
          <Route path="/news" component={home} />
          <Route path="/contacts" component={home} />

        </div>
      </Router>
    </div>
  );
}
const home = () => <Home />;



export default App;
