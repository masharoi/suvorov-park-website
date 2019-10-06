import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import Images from "./Images";
import "../css/Common.css";
import About from "./About";
import Contacts from "./Contacts";
import makeRequest from "./Utils";
import Loader from "react-loader-spinner";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutText: "",
      isTextLoading: true,
      isImagesLoading: true
    };
  }

  handleResponse = json => {
    this.setState({ aboutText: json.about, isTextLoading:false });
  };

  componentDidMount() {
    makeRequest(
      null,
      "get",
      "/api/common/general-configuration",
      this.handleResponse
    );
  }

  render() {
    const { aboutText, isTextLoading } = this.state;
    return (
      <div>
        {!isTextLoading ? (
          <div>
            <MyNavbar isHome={true} />
            <Images />
            <About text={aboutText} />
            <Contacts />
            <MyFooter isHome={true} />
          </div>
        ) : (
          <div class="loader-container">
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
    );
  }
}

export default Home;
