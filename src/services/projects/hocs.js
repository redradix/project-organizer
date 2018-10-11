import { compose, lifecycle } from 'recompose'
import { getProjects } from './actions'
import { connect } from 'react-redux'
import { getProjectsFromState, isLoadingProjects } from './selectors'

export const withProjects = () => {
  const mapStateToProps = state => ({
    projects: getProjectsFromState(state),
    loadingProjects: isLoadingProjects(state)
  })

  return compose(
    connect(mapStateToProps),
    lifecycle({
      componentDidMount () {
        getProjects()
      }
    })
  )
}
