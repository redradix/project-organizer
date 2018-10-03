import initEvents from "./initEvents";
import { getFromAPI } from "../../api";

export default function getEvents() {
  return function(dispatch) {
    getFromAPI("events").then(({ data }) => {
      dispatch(initEvents(data));
    });
  };
}
