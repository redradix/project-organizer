import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getAssignments } from './actions'

export const withSelectedAssignment = () => {
  const mapStateToProps = ({ events }, ownProps) => ({
    event: findEventById(events, ownProps)
  })

  const findEventById = (events, props) => {
    return events.find(value => value.id === parseInt(props.match.params.id))
  }

  return connect(mapStateToProps)
}

export const withAssignments = () => {
  const mapStateToProps = ({ events }) => ({ events })

  return compose(
    connect(mapStateToProps),
    lifecycle({
      componentDidMount () {
        getAssignments()
      }
    })
  )
}
