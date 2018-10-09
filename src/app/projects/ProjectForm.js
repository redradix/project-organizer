import { withHandlers, compose } from 'recompose'
import getRandomColor from '../../colors'
import ProjectForm from '../../ui/forms/ProjectForm'
import { addProject } from '../../services/projects/actions'

const submitHandler = props => values => {
  values.color = getRandomColor()
  addProject(values)
}

export default compose(withHandlers({ onSubmit: submitHandler }))(ProjectForm)
