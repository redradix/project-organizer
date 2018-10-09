import store from '../../store'

export default function getProjects () {
  return store.dispatch({ type: 'GET_PROJECTS_REQUEST' })
}
