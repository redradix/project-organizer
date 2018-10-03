export default function(state = [], action) {
  switch (action.type) {
    case "INIT_PROJECTS":
      return [...action.projects];
    case "ADD_PROJECT":
      return [...state, action.project];
    case "REMOVE_PROJECT":
      return state.projects.filter(
        project => project.title !== action.project.id
      );
    default:
      return state;
  }
}
