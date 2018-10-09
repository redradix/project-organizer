import store from '../../store'

export default function editEvent (event) {
  return store.dispatch({ type: 'EDIT_EVENT_REQUEST', payload: event })
}
