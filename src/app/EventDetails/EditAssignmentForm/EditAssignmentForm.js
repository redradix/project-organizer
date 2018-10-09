import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose, withHandlers, withProps } from 'recompose'
import withEmployees from '../../HOCs/withEmployees'
import withProjects from '../../HOCs/withProjects'
import AssignmentForm from '../../Assignments/AssignmentForm/AssignmentsForm'
import editEvent from '../../../redux/actions/events/editEvent'
import removeEvent from '../../../redux/actions/events/removeEvent'

const mapStateToProps = ({ projects }) => ({ projects })

const submitHandler = props => values => {
  editEvent(values)
}

const deleteHandler = props => event => {
  event.preventDefault()
  removeEvent(props.initialValues.id)
  props.history.push('/')
}

export default compose(
  withRouter,
  connect(mapStateToProps),
  withHandlers({ onSubmit: submitHandler, deleteHandler }),
  withEmployees,
  withProjects,
  withProps({ formAction: 'Editar' })
)(AssignmentForm)
