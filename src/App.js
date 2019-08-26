import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./components/Home";
import ForumExpanded from "./components/ForumExpanded";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route path="/profile" component={main} />
          <Route path="/full-forum" component={forumExpanded} />

        </div>
      </Router>
    </div>
  );
}
const home = () => <Home />;
const main = () => <Main/>;
const forumExpanded = () => <ForumExpanded/>


export default App;
