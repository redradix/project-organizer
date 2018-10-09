import store from '../../store'

export default function removeEvent (eventId) {
  return store.dispatch({ type: 'REMOVE_EVENT_REQUEST', payload: eventId })
}
