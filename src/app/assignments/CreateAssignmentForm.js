import { compose, withHandlers, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addAssignment } from '../../services/assignments/actions'
import AssignmentForm from '../../ui/forms/AssignmentsForm'
import { withEmployees } from '../../services/employees/hocs'
import { withProjects } from '../../services/projects/hocs'

const mapStateToProps = ({ projects }) => ({ projects })

const submitHandler = props => values => {
  addAssignment(values)
  props.history.push('/')
}

export default compose(
  withRouter,
  connect(mapStateToProps),
  withHandlers({ onSubmit: submitHandler }),
  withEmployees,
  withProjects,
  withProps({ formAction: 'Crear' })
)(AssignmentForm)
