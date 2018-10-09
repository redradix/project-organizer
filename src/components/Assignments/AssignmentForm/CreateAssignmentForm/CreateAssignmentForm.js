import AssignmentForm from '../AssignmentsForm'
import { compose, withHandlers, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import withEmployees from '../../../HOCs/withEmployees'
import withProjects from '../../../HOCs/withProjects'
import addEvent from '../../../../redux/actions/events/addEvent'

const mapStateToProps = ({ projects }) => ({ projects })

const mapDispatchToProps = {
  addEvent
}

const submitHandler = props => values => {
  addEvent(values)
  props.history.push('/')
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({ onSubmit: submitHandler }),
  withEmployees,
  withProjects,
  withProps({ formAction: 'Crear' })
)(AssignmentForm)
