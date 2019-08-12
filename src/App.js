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
import ContactsPreview from "./components/ContactsPreview";
import Forum from "./components/Forum";
import Blog from "./components/Blog";
import ForumHome from "./components/ForumHome";
import ForumSearch from "./components/ForumSearch";
import ForumRules from "./components/ForumRules";

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

          <Route path="/search-forums" component={forumSearch} />
          <Route path="/forum-rules" component={forumRules} />
          <Route path="/forum-login" component={forumLogin} />

          <Route path="/documents" component={documents} />
          <Route path="/profile" component={profile} />
          <Route path="/questionsAndAnswers" component={questionsAndAnswers} />
        </div>
      </Router>
    </div>
  );
}
const home = () => <Home />;

const forumSearch = () => <Homes content={<Forum content=<ForumSearch/> />}/>;
const forumRules = () => <Homes content={<Forum content=<ForumRules/> />}/>;
const forumLogin = () => <Homes content={<Forum content={"forum login"} />}/>;

const about = () => <Company content={<About />} selectedLink={0}/>;
const newsAbout = () => <Company content={<AllNews />} selectedLink={1}/>;
const contactsAbout = () => <Company content={<Contacts />} selectedLink={2}/>;

const homesGeneral = () => (
  <Homes
    content={
      <div class="empty-screen">
        <h2>Список домов</h2>
        <p>У текущего объекта управления отсутствуют дома.</p>
      </div>
    }
    selectedLink={0}
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
      selectedLink={1}
  />
);
const homesVideo = () => (
  <Homes
    content={
      <div class="empty-screen">
        <h2>Видео</h2>
        <p>Видео отсутствуют.</p>
      </div>
    }
      selectedLink={2}
  />
);
const homesForum = () => (
  <Homes
    content={
      <div>
        <Forum content=<ForumHome/>/>
      </div>
    }
      selectedLink={3}
  />
);
const homesBlog = () => (
  <Homes
    content={
      <div>
        <Blog/>
      </div>
    }
      selectedLink={4}
  />
);
const homesDept = () => (
  <Homes
    content={
      <div class="empty-screen">
        <h2>Список должников</h2>
        <p>В настоящее время должников нет.</p>
      </div>
    }
      selectedLink={5}
  />
);

const documents = () => <Documents />;
const profile = () => <Profile />
const questionsAndAnswers = () => <Questions />;

export default App;
