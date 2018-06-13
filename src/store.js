import { createStore, combineReducers, applyMiddleware } from "redux";
import promisemiddleware from "redux-promise-middleware";
const store = createStore(
  combineReducers({}),
  applyMiddleware(promisemiddleware())
);
export default store;
