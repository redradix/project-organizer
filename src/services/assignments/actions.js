import { store } from '../../app/App'

import {
  ADD_ASSIGNMENT_REQUEST,
  EDIT_ASSIGNMENT_REQUEST,
  GET_ASSIGNMENTS_REQUEST,
  REMOVE_ASSIGNMENT_REQUEST
} from './action-types'

export function addAssignment (event) {
  return store.dispatch({ type: ADD_ASSIGNMENT_REQUEST, payload: event })
}

export function editAssignment (event) {
  return store.dispatch({ type: EDIT_ASSIGNMENT_REQUEST, payload: event })
}

export function fetchAssignments () {
  return store.dispatch({ type: GET_ASSIGNMENTS_REQUEST })
}

export function removeAssignment (eventId) {
  return store.dispatch({ type: REMOVE_ASSIGNMENT_REQUEST, payload: eventId })
}
