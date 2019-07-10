import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Company from "./components/Company";
import Homes from "./components/Homes";
import Documents from "./components/Documents";
import Profile from "./components/Profile";
import Questions from "./components/Questions";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import AllNews from "./components/AllNews";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={home} />

          <Route path="/about" component={about} />
          <Route path="/news" component={newsAbout} />
          <Route path="/contacts" component={contactsAbout} />

          <Route path="/homes-general" component={homesGeneral} />
          <Route path="/photogallery" component={homesPhotoGallery} />
          <Route path="/video" component={homesVideo} />
          <Route path="/forum" component={homesForum} />
          <Route path="/blogs" component={homesBlog} />
          <Route path="/debts" component={homesDept} />

          <Route path="/documents" component={documents} />
          <Route path="/profile" component={profile} />
          <Route path="/questionsAndAnswers" component={questionsAndAnswers} />
        </div>
      </Router>
    </div>
  );
}
const home = () => <Home />;

const about = () => <Company content={<About />} />;
const newsAbout = () => <Company content={<AllNews />} />;
const contactsAbout = () => <Company content={<Contacts />} />;

const homesGeneral = () => (
  <Homes
    content={
      <div class="empty-screen">
        <h2>Список домов</h2>
        <p>У текущего объекта управления отсутствуют дома.</p>
      </div>
    }
  />
);
const homesPhotoGallery = () => (
  <Homes
    content={
      <div class="empty-screen">
        <h2>Фотогалерея</h2>
        <p>Список альбомов пуст.</p>
      </div>
    }
  />
);
const homesVideo = () => (
  <Homes
    content={
      <div class="empty-screen">
        <h2 >Видео</h2>
        <p>Видео отсутствуют.</p>
      </div>
    }
  />
);
const homesForum = () => <Homes content="Forum" />;
const homesBlog = () => <Homes content="Blog" />;
const homesDept = () => <Homes content={
  <div class="empty-screen">
    <h2 >Список должников</h2>
    <p>В настоящее время должников нет.</p>
  </div>
}
 />;

const documents = () => <Documents />;
const profile = () => <Profile />;
const questionsAndAnswers = () => <Questions />;

export default App;
