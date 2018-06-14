import React, { Component } from "react";
import "./Restaurants.css";
import RestaurantDetails from "../restaurant_details/RestaurantDetails";
import { connect } from "react-redux";
import axios from "axios";
import gradient from "../../images/cellGradientBackground@2x.png";

class Restaurants extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    };
  }
  componentDidMount() {
    axios
      .get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
      .then(res => {
        console.log(res);
        this.setState({ restaurants: res.data.restaurants });
      })
      .catch(err => console.log(err));
  }
  render() {
    let { restaurantViewToggle } = this.props.restaurantReducer;
    console.log(this.props);
    let { restaurants } = this.state;
    let mappedRestaurants = restaurants.map((e, i) => {
      return (
        <div
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
  {}
)(Restaurants);
