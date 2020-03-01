import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import Images from "./Images";
import "../css/Common.css";
import About from "./About";
import Contacts from "./Contacts";
import Video from "./Video";
import makeRequest from "./Utils";
import Loader from "react-loader-spinner";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutText: "",
      isLoading: true,
      imagesData: null,
      videosData: null
    };
  }

  handleResponse = json => {
    this.setState({ aboutText: json.about, isLoading:false, imagesData: json.images, videosData: json.videos });
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
    const { aboutText, isLoading, imagesData, videosData } = this.state;
    return (
      <div>
        {!isLoading ? (
          <div>
            <MyNavbar isHome={true} />
            <Images imagesList={imagesData}/>
            <Video videosList={videosData}/>
            <Contacts text={aboutText} />
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
