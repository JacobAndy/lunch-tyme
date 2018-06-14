import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Restaurants from "./components/restaurants/Restaurants";

class App extends Component {
  componentDidMount() {}
  render() {
    // axios
    //   .get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));
    return (
      <main className="app-holder">
        <Restaurants />
        <Navbar />
      </main>
    );
  }
}

export default App;
