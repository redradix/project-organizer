import { withRouter } from 'react-router-dom'
import {
  editAssignment,
  removeAssignment
} from '../../services/assignments/actions'
import { compose, withHandlers, withProps } from 'recompose'
import { withEmployees } from '../../services/employees/hocs'
import { withProjects } from '../../services/projects/hocs'
import AssignmentForm from '../../ui/forms/AssignmentsForm'
import { formatAssignment } from '../../services/assignments/utils'

const submitHandler = props => values => {
  const formatedAssignment = formatAssignment(values, props.projects)
  editAssignment(formatedAssignment)
}

const deleteHandler = props => event => {
  event.preventDefault()
  removeAssignment(props.initialValues.id)
}

export default compose(
  withRouter,
  withProjects(),
  withEmployees(),
  withHandlers({ onSubmit: submitHandler, deleteHandler }),
  withProps({ formAction: 'Editar' })
)(AssignmentForm)
