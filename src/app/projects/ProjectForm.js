import { withHandlers, compose } from 'recompose'
import getRandomColor from '../../colors'
import ProjectForm from '../../ui/forms/ProjectForm'
import { addProject } from '../../services/projects/actions'
import { connect } from 'react-redux'

export default compose(
  connect(null, { addProject }),
  withHandlers({
    onSubmit: props => values => {
      values.color = getRandomColor()
      props.addProject(values)
    },
  }),
)(ProjectForm)
