import React from "react";
import "../css/Contacts.css";
import map from "../images/map.png";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import makeRequest from "./Utils";
import FeedbackForm from "./FeedbackForm";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mapData = {
      center: [55.73557716284752, 37.45359357672123],
      zoom: 16
    };

    const coordinates = [55.73557716284752, 37.45359357672123];

    const placemarkStyle = {
      iconColor: "#C95501"
    };

    var mapStyle = {
      width: "100%",
      height: "100%"
    };
    return (
      <section id="contacts" class="row">
        <div id="contact-map" class="col-12 col-lg-6">
          <div id="map">
            <YMaps>
              <Map
                style={mapStyle}
                width="100%"
                height="100%"
                defaultState={mapData}
              >
                {<Placemark options={placemarkStyle} geometry={coordinates} />}
              </Map>
            </YMaps>
          </div>
        </div>
        <div id="contact-form-outer" class="col-12 col-lg-6">
          <h2 class="contact-form-header large-size-text">Написать нам:</h2>
          <FeedbackForm
            showEmail={
              window.localStorage.getItem("isLoggedIn") == "True" ? false : true
            }
          />
        </div>
      </section>
    );
  }
}

export default Contacts;
