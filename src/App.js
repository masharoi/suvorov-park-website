import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import About from "./components/About";
import Homes from "./components/Homes";
import Documents from "./components/Documents";
import Profile from "./components/Profile";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={about} />
          <Route path="/about" component={about} />
          <Route path="/homes" component={homes} />
          <Route path="/documents" component={documents} />
          <Route path="/profile" component={profile} />
          <Route path="/questionsAndAnswers" component={questionsAndAnswers} />
        </div>
      </Router>
    </div>
  );
}

const about = () => <About />;
const homes = () => <Homes />;
const documents = () => <Documents />;
const profile = () => <Profile />;
const questionsAndAnswers = () => <Questions />;

export default App;
