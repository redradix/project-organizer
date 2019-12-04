import {
  ADD_ASSIGNMENT_REQUEST,
  EDIT_ASSIGNMENT_REQUEST,
  GET_ASSIGNMENTS_REQUEST,
  REMOVE_ASSIGNMENT_REQUEST,
} from './action-types'

export function addAssignment(event) {
  return { type: ADD_ASSIGNMENT_REQUEST, payload: event }
}

export function editAssignment(event) {
  return { type: EDIT_ASSIGNMENT_REQUEST, payload: event }
}

export function fetchAssignments() {
  return { type: GET_ASSIGNMENTS_REQUEST }
}

export function removeAssignment(eventId) {
  return { type: REMOVE_ASSIGNMENT_REQUEST, payload: eventId }
}
