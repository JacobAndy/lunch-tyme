import React, { Component } from "react";
import "./Restaurants.css";
import RestaurantDetails from "../restaurant_details/RestaurantDetails";
import { connect } from "react-redux";
import gradient from "../../images/cellGradientBackground@2x.png";
import {
  getRestaurants,
  toggleRestaurantDetails
} from "../../ducks/restaurants";

class Restaurants extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getRestaurants();
  }
  render() {
    let { restaurantViewToggle, restaurants } = this.props.restaurantReducer;
    console.log(this.props);
    let mappedRestaurants = restaurants.map((e, i) => {
      return (
        <div
          onClick={() => this.props.toggleRestaurantDetails(true)}
          className="each-restaurant"
          style={{
            backgroundImage: `url(${e.backgroundImageURL})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          key={i}
        >
          <section className="restaurant-name-category">
            <p>{e.name}</p>
            <p>{e.category}</p>
          </section>
          <img src={gradient} height="100%" width="100%" />
        </div>
      );
    });
    return (
      <main
        className={
          !restaurantViewToggle ? "restaurants-main" : "restaurants-main-map"
        }
      >
        <section
        // className={
        //   !restaurantViewToggle ? "currentPlatform" : "inactivePlatform"
        // }
        >
          {mappedRestaurants}
        </section>
        <section
        // className={
        //   restaurantViewToggle ? "currentPlatform" : "inactivePlatform"
        // }
        >
          <RestaurantDetails />
        </section>
      </main>
    );
  }
}
let mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getRestaurants, toggleRestaurantDetails }
)(Restaurants);
