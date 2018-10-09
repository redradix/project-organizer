import store from '../../store'

export default function getEvents () {
  return store.dispatch({ type: 'GET_EVENTS_REQUEST' })
}
