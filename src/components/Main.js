import React from "react";
import Services from "./Services";
import MyNavbar from "./MyNavbar";
import AllNews from "./AllNews";
import Vote from "./Vote";
import MyFooter from "./MyFooter";
import Forum from "./Forum";
import makeRequest from "./Utils";

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
    alert(JSON.stringify(json))
    this.setState({ forumPreviewList: json });
  }

  componentDidMount() {
    makeRequest(null, "get", "/api/common/news", this.handleNewsResponse);
    makeRequest(null, "get", "/api/polls/", this.handleVoteResponse);
    //makeRequest(null, "get", "/api/forum/short?limit=3", this.handleForumPreviewResponse);
  }

  render() {
     const { newsList, pollsList, forumPreviewList } = this.state;
    return (
      <div>
        <MyNavbar />
        <Services />
        {newsList.length != 0 ? <AllNews newsList={newsList} /> : <div>empty</div>}
        {pollsList.length != 0 ? <Vote pollsList={pollsList} /> : <div>empty</div>}
        <Forum/>
        <MyFooter />
      </div>
    );
  }
}

export default Main;
