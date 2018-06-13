import React, { Component } from "react";
import "./Navbar.css";
import lunch from "../../images/tab_lunch@2x.png";
import internets from "../../images/tab_internets@2x.png";
import map from "../../images/icon_map@2x.png";
import { connect } from "react-redux";
import { toggleRestaurantDetails } from "../../ducks/restaurants";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      currentToggle: true
    };
  }
  render() {
    console.log(this.props.restaurantReducer);
    let { currentToggle } = this.state;
    let { toggleRestaurantDetails } = this.props.restaurantReducer;
    return (
      <main>
        <header className="top-intro-header">
          <div className="header-info-holder">
            <h3>Lunch Tyme</h3>
            <img
              onClick={() =>
                this.props.restaurantReducer.toggleRestaurantDetails(true)
              }
              src={map}
              height="35px"
              width="35px"
            />
          </div>
        </header>
        <footer className="navbar-holder">
          <section
            onClick={() => this.setState({ currentToggle: true })}
            className={!currentToggle && "inactiveToggle"}
          >
            <img src={lunch} width="25px" height="30px" />
            <p>lunch</p>
          </section>
          <section
            onClick={() => this.setState({ currentToggle: false })}
            className={currentToggle && "inactiveToggle"}
          >
            <img src={internets} width="25px" height="30px" />
            <p>internets</p>
          </section>
        </footer>
      </main>
    );
  }
}
let mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { toggleRestaurantDetails }
)(Navbar);
