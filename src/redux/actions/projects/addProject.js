import { createProject } from "../../../api";

export default function addProject(project) {
  return function(dispatch) {
    return createProject(project).then(({ data }) => {
      dispatch({ type: "ADD_PROJECT", project: data });
    });
  };
}
