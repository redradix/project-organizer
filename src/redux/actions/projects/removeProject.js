import store from '../../store'

export default function removeProject (projectId) {
  return store.dispatch({ type: 'REMOVE_PROJECT_REQUEST', payload: projectId })
}
