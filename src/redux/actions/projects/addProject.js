import store from '../../store'

export default function addProject (project) {
  return store.dispatch({ type: 'ADD_PROJECT_REQUEST', payload: project })
}
