export default function(state = [], action) {
  switch (action.type) {
    case "INIT_PROJECTS":
      return [...action.projects];
    case "ADD_PROJECT":
      return [...state, action.project];
    default:
      return state;
  }
}
