import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchAssignments } from './actions'
import {
  getAssignmentsFromState,
  isLoadingAssignments,
  findAssignmentById
} from './selectors'

export const withSelectedAssignment = () => {
  const mapStateToProps = (state, ownProps) => ({
    assignment: findAssignmentById(state, ownProps.match.params.id)
  })

  return connect(mapStateToProps)
}

export const withAssignments = () => {
  const mapStateToProps = state => ({
    loadingAssignments: isLoadingAssignments(state),
    assignments: getAssignmentsFromState(state)
  })

  return compose(
    connect(mapStateToProps),
    lifecycle({
      componentDidMount () {
        fetchAssignments()
      }
    })
  )
}
