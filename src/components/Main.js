import React from "react";
import Services from "./Services";
import MyNavbar from "./MyNavbar";
import AllNews from "./AllNews";
import Vote from "./Vote";
import MyFooter from "./MyFooter";
import Forum from "./Forum";
import makeRequest from "./Utils";
import { LOGGED_OUT } from "./Utils";
import LogIn from "./LogIn";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      pollsList: [],
      forumPreviewList: []
    };
  }

  handleNewsResponse = json => {
    this.setState({ newsList: json });
  };

  handleVoteResponse = json => {
    this.setState({ pollsList: json });
  };

  handleForumPreviewResponse = json => {
    this.setState({ forumPreviewList: json.results });
  };

  componentDidMount() {
    makeRequest(null, "get", "/api/common/news", this.handleNewsResponse);
    makeRequest(null, "get", "/api/polls/", this.handleVoteResponse);
    makeRequest(
      null,
      "get",
      "/api/forum/short?limit=3",
      this.handleForumPreviewResponse
    );
  }

  render() {
    const { newsList, pollsList, forumPreviewList } = this.state;
    return (
      <div>
        {window.localStorage.getItem("isLoggedIn") == "false" ? (
          <LogIn />
        ) : (
          <div>
            <MyNavbar isHome={false} />
            <Services />

            {newsList.length != 0 ? (
              <AllNews newsList={newsList} />
            ) : (
              <div></div>
            )}

            {pollsList.length != 0 ? (
              <Vote pollsList={pollsList} />
            ) : (
              <div></div>
            )}

            {forumPreviewList.length != 0 ? (
              <Forum forumPreviewList={forumPreviewList} />
            ) : (
              <div></div>
            )}

            <MyFooter />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
