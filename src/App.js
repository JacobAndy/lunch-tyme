import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import RestaurantDetails from "./components/restaurant_details/RestaurantDetails";

class App extends Component {
  componentDidMount() {}
  render() {
    axios
      .get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
      // .get(process.env.REACT_APP_BOTTLE_ROCKET_API)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    return (
      <main>
        <div className="restaurant_details">
          <RestaurantDetails />
        </div>
        <Navbar />
      </main>
    );
  }
}

export default App;
