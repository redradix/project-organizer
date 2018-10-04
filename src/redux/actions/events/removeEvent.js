import { removeEventFromDB, getFromAPI } from "../../../api";
import initEvents from "./initEvents";

export default function removeEvent(eventId) {
  return function(dispatch) {
    return removeEventFromDB(eventId)
      .then(data => getFromAPI("events"))
      .then(({ data }) => dispatch(initEvents(data)));
  };
}
