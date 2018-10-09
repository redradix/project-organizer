import store from '../../redux/store'
import {
  ADD_ASSIGNMENT_REQUEST,
  EDIT_ASSIGNMENT_REQUEST,
  GET_ASSIGNMENTS_REQUEST,
  REMOVE_ASSIGNMENT_REQUEST
} from './action-types'

export function addEvent (event) {
  return store.dispatch({ type: ADD_ASSIGNMENT_REQUEST, payload: event })
}

export function editEvent (event) {
  return store.dispatch({ type: EDIT_ASSIGNMENT_REQUEST, payload: event })
}

export function getEvents () {
  return store.dispatch({ type: GET_ASSIGNMENTS_REQUEST })
}

export default function removeEvent (eventId) {
  return store.dispatch({ type: REMOVE_ASSIGNMENT_REQUEST, payload: eventId })
}
