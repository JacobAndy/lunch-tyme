import { createStore, combineReducers, applyMiddleware } from "redux";
import promisemiddleware from "redux-promise-middleware";
import restaurantReducer from "./ducks/restaurants";
const store = createStore(
  combineReducers({ restaurantReducer }),
  applyMiddleware(promisemiddleware())
);
export default store;
