import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  editAssignment,
  removeAssignment
} from '../../services/assignments/actions'
import { compose, withHandlers, withProps } from 'recompose'
import { withEmployees } from '../../services/employees/hocs'
import { withProjects } from '../../services/projects/hocs'
import AssignmentForm from '../../ui/forms/AssignmentsForm'

const mapStateToProps = ({ projects }) => ({ projects })

const submitHandler = props => values => {
  editAssignment(values)
}

const deleteHandler = props => event => {
  event.preventDefault()
  removeAssignment(props.initialValues.id)
}

export default compose(
  withRouter,
  connect(mapStateToProps),
  withHandlers({ onSubmit: submitHandler, deleteHandler }),
  withEmployees,
  withProjects,
  withProps({ formAction: 'Editar' })
)(AssignmentForm)
