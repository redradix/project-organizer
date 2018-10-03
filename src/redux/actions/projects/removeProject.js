import { removeProjectFromDB, getFromAPI } from "../../../api";
import initProjects from "./initProjects";

export default function removeProject(id) {
  return function(dispatch) {
    removeProjectFromDB(id)
      .then(data => getFromAPI("projects"))
      .then(({ data }) => dispatch(initProjects(data)));
  };
}
