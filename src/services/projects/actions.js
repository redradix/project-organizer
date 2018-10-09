import store from '../../store'
import {
  ADD_PROJECT_REQUEST,
  GET_PROJECT_REQUEST,
  REMOVE_PROJECT_REQUEST
} from './action-types'

export function addProject (project) {
  return store.dispatch({ type: ADD_PROJECT_REQUEST, payload: project })
}

export function getProjects () {
  return store.dispatch({ type: GET_PROJECT_REQUEST })
}

export function removeProject (projectId) {
  return store.dispatch({ type: REMOVE_PROJECT_REQUEST, payload: projectId })
}
