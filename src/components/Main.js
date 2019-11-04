import React from "react";
import Services from "./Services";
import MyNavbar from "./MyNavbar";
import AllNews from "./AllNews";
import Vote from "./Vote";
import MyFooter from "./MyFooter";
import Forum from "./Forum";
import EmptyNews from "./EmptyNews";
import makeRequest from "./Utils";
import LogIn from "./LogIn";
import EmptyPolls from "./EmptyPolls";
import EmptyForums from "./EmptyForums";
import Loader from "react-loader-spinner";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      pollsList: [],
      forumPreviewList: [],
      services: [],
      isForumLoading: true,
      isPollLoading: true,
      isNewsLoading: true,
      isServicesLoading: true
    };

  }

  handleNewsResponse = json => {
    this.setState({ newsList: json, isNewsLoading: false });
  };

  handleVoteResponse = json => {
    this.setState({ pollsList: json, isPollLoading: false });
  };

  handleForumPreviewResponse = json => {
    this.setState({ forumPreviewList: json.results, isForumLoading: false });
  };

  handleServicesResponse = json => {
    this.setState({ services: json, isServicesLoading: false });
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
    makeRequest(null, "get", "/api/services/", this.handleServicesResponse);
  }


  render() {
    const {
      newsList,
      pollsList,
      forumPreviewList,
      services,
      isForumLoading,
      isPollLoading,
      isServicesLoading
    } = this.state;
    return (
      <div>
        {window.localStorage.getItem("isLoggedIn") === "false" ? (
          <LogIn />
        ) : (
          <div>
            {!isForumLoading &&
            !isPollLoading &&
            !isPollLoading &&
            !isServicesLoading ? (
              <div>
                <MyNavbar isHome={false} />
                <Services servicesList={services} />

                {newsList.length !== 0 ? (
                  <AllNews newsList={newsList} />
                ) : (
                  <EmptyNews />
                )}

                {pollsList.length !== 0 ? (
                  <Vote pollsList={pollsList} />
                ) : (
                  <EmptyPolls />
                )}

                {forumPreviewList.length !== 0 ? (
                  <Forum forumPreviewList={forumPreviewList} />
                ) : (
                  <EmptyForums />
                )}

                <MyFooter />
              </div>
            ) : (
              <div className="loader-container">
                <Loader
                  type="Rings"
                  color="#7d0000"
                  height={150}
                  width={150}
                  timeout={10000}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
