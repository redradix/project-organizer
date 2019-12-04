import { compose, withHandlers, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import { addAssignment } from '../../services/assignments/actions'
import AssignmentForm from '../../ui/forms/AssignmentsForm'
import { withEmployees } from '../../services/employees/hocs'
import { withProjects } from '../../services/projects/hocs'
import { formatAssignment } from '../../services/assignments/utils'
import { connect } from 'react-redux'

export default compose(
  withRouter,

  withEmployees(),
  withProjects(),
  connect(null, { addAssignment }),

  withHandlers({
    onSubmit: props => values => {
      const assignmentFormated = formatAssignment(values, props.projects)
      props.addAssignment(assignmentFormated)
    },
  }),
  withProps({ formAction: 'Crear' }),
)(AssignmentForm)
