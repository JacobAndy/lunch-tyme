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

class Restaurant extends Component {
  // componentDidMount() {}
  render() {
    console.log(this.props.restaurantReducer.restaurants);
    const mappedMarkers = this.props.restaurantReducer.restaurants.map(e => {
      return (
        <Marker
          position={{
            lat: e.location.lat,
            lng: e.location.lng
          }}
        />
      );
    });
    const RestaurantMarkers = compose(
      withScriptjs,
      withGoogleMap
    )(props => (
      <GoogleMap
        labelStyle={{ color: "blue" }}
        defaultZoom={15}
        defaultCenter={{
          lat: this.props.restaurantReducer.activeLocation.lat,
          lng: this.props.restaurantReducer.activeLocation.lng
        }}
      >
        {mappedMarkers}
      </GoogleMap>
    ));
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
