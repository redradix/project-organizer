export default function(state = [], action) {
  switch (action.type) {
    case "INIT_EVENTS":
      return [...action.events];
    case "ADD_EVENT":
      return [...state, action.event];
    default:
      return state;
  }
}
