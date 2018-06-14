import React, { Component } from "react";
import "./RestaurantDetails.css";
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { connect } from "react-redux";
import { toggleRestaurantDetails } from "../../ducks/restaurants";

const RestaurantMarkers = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));

class Restaurant extends Component {
  render() {
    console.log(this.props);
    return (
      <RestaurantMarkers
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "400px", width: "100vw" }} />}
        containerElement={<div style={{ height: "400px", width: "100vw" }} />}
        mapElement={<div style={{ height: "400px", width: "100vw" }} />}
      />
    );
  }
}
let mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { toggleRestaurantDetails }
)(Restaurant);
