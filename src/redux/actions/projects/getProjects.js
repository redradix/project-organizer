import initProjects from "./initProjects";
import { getFromAPI } from "../../../api";

export default function getProjects() {
  return function(dispatch) {
    getFromAPI("projects").then(({ data }) => {
      dispatch(initProjects(data));
    });
  };
}
