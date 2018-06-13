import React, { Component } from "react";
import "./Restaurants.css";
import RestaurantDetails from "../restaurant_details/RestaurantDetails";
import { connect } from "react-redux";

class Restaurants extends Component {
  render() {
    let { restaurantViewToggle } = this.props.restaurantReducer;
    console.log(this.props);
    return (
      <main className="restaurants-main">
        {!restaurantViewToggle ? (
          <p>Restaurants Main Page</p>
        ) : (
          <RestaurantDetails />
        )}
      </main>
    );
  }
}
let mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  {}
)(Restaurants);
