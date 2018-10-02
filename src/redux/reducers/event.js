export default function(state = [], action) {
  switch (action.type) {
    case "ADD_EVENT":
      return Object.assign({}, state, action.event);
    case "REMOVE_EVENT":
      return state.events.filter(event => event.title !== action.event.title);
    default:
      return state;
  }
}