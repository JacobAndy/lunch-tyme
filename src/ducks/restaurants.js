import axios from "axios";

const initialState = {
  restaurantViewToggle: false,
  loading: false,
  restaurants: [],
  activeLocation: ""
};

const TOGGLE_RESTAURANT_DETAILS = "TOGGLE_RESTAURANT_DETAILS";
const GET_RESTAURANTS = "GET_RESTAURANTS";
const SET_ACTIVE_LOCATION = "SET_ACTIVE_LOCATION";

export default function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_RESTAURANTS}_PENDING`:
      return { ...state, loading: true };

    case `${GET_RESTAURANTS}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        restaurants: action.payload.data.restaurants,
        loading: false
      };

    case SET_ACTIVE_LOCATION:
      return { ...state, activeLocation: action.payload };

    case TOGGLE_RESTAURANT_DETAILS:
      return { ...state, restaurantViewToggle: action.payload };
    default:
      return state;
  }
}

export function toggleRestaurantDetails(val) {
  return {
    type: TOGGLE_RESTAURANT_DETAILS,
    payload: val
  };
}
export function setActiveRestaurant(val) {
  console.log(val);
  return {
    type: SET_ACTIVE_LOCATION,
    payload: val
  };
}
export function getRestaurants() {
  return {
    type: GET_RESTAURANTS,
    payload: axios.get(
      "https://s3.amazonaws.com/br-codingexams/restaurants.json"
    )
  };
}
