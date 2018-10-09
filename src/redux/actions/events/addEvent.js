import store from '../../store'

export default function addEvent (event) {
  return store.dispatch({ type: 'ADD_EVENT_REQUEST', payload: event })
}
