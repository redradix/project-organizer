import {
  ADD_PROJECT_REQUEST,
  GET_PROJECT_REQUEST,
  REMOVE_PROJECT_REQUEST,
} from './action-types'

export function addProject(project) {
  return { type: ADD_PROJECT_REQUEST, payload: project }
}

export function getProjects() {
  return { type: GET_PROJECT_REQUEST }
}

export function removeProject(projectId) {
  return { type: REMOVE_PROJECT_REQUEST, payload: projectId }
}
