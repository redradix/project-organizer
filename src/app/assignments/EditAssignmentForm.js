import { withRouter } from 'react-router-dom'
import {
  editAssignment,
  removeAssignment,
} from '../../services/assignments/actions'
import { compose, withHandlers, withProps } from 'recompose'
import { withEmployees } from '../../services/employees/hocs'
import { withProjects } from '../../services/projects/hocs'
import AssignmentForm from '../../ui/forms/AssignmentsForm'
import { formatAssignment } from '../../services/assignments/utils'
import { connect } from 'react-redux'

export default compose(
  withRouter,

  withProjects(),
  withEmployees(),
  connect(null, { editAssignment, removeAssignment }),

  withHandlers({
    onSubmit: props => values => {
      const formatedAssignment = formatAssignment(values, props.projects)
      props.editAssignment(formatedAssignment)
    },
    deleteHandler: props => event => {
      event.preventDefault()
      props.removeAssignment(props.initialValues.id)
    },
  }),
  withProps({ formAction: 'Editar' }),
)(AssignmentForm)
