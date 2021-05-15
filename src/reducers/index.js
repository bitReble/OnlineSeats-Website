import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import route from "./route";
import bus from "./bus";
import schedule from "./schedule";

export default combineReducers({
  alert,
  auth,
  route,
  bus,
  schedule,
});
