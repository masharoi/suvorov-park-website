import React from "react";
import "../css/Contacts.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import About from "./About";

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
        <About text={this.props.text}/>
        </div>
      </section>
    );
  }
}

export default Contacts;
