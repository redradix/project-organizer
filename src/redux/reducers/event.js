export default function(state = [], action) {
  switch (action.type) {
    case "INIT_EVENTS":
    return [ ...state, ...action.events ];
    case "ADD_EVENT":
      return [ ...state, action.event ];
    case "REMOVE_EVENT":
      return state.events.filter(event => event.title !== action.event.title);
    default:
      return state;
  }
}