import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import ForumExpanded from "./components/ForumExpanded";
import Main from "./components/Main";
import LogIn from "./components/LogIn";
import Error from "./components/Error";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App(props) {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route exact path="/home" component={home} />
          <Route path="/profile" component={main} />
          <Route path="/full-forum" component={forumExpanded} />
          <Route path="/log-in" component={logIn} />
          <Route path="/error" component={error} />
          <Route path="/forgot-password" component={forgotPassword} />
          <Route path="/reset-password" component={resetPassword} />
        </div>
      </Router>
    </div>
  );
}
const home = () => <Home />;
const main = () => <Main />;
const forumExpanded = () => <ForumExpanded />;
const logIn = () => <LogIn />;
const error = () => <Error />;
const forgotPassword = () => <ForgotPassword />;
const resetPassword = () => <ResetPassword />;

export default App;
