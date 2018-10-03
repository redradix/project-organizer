import { combineReducers } from "redux";
import events from "./event";
import projects from "./project";

export default combineReducers({
  events,
  projects
});
