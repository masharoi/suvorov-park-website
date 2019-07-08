import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import About from "./components/About";
import Homes from "./components/Homes";
import Documents from "./components/Documents";
import Profile from "./components/Profile";
import Questions from "./components/Questions";
import Home from "./components/Home";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={home} />

          <Route path="/about" component={about} />
          <Route path="/news" component={newsAbout} />
          <Route path="/contacts" component={contactsAbout} />

          <Route path="/homes" component={homes} />
          <Route path="/documents" component={documents} />
          <Route path="/profile" component={profile} />
          <Route path="/questionsAndAnswers" component={questionsAndAnswers} />
        </div>
      </Router>
    </div>
  );
}
const home = () => <Home/>;

const about = () => <About content="general about"/>;
const newsAbout = () => <About content="news about"/>;
const contactsAbout = () => <About content={<Contacts/>}/>;

const homes = () => <Homes />;
const documents = () => <Documents />;
const profile = () => <Profile />;
const questionsAndAnswers = () => <Questions />;

export default App;
