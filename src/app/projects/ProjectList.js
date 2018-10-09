import { compose, withHandlers, withProps } from 'recompose'
import { withProjects } from '../../services/projects/hocs'
import { removeProject } from '../../services/projects/actions'
import ListView from '../../ui/ListView'

const deleteHandler = props => id => {
  return function () {
    removeProject(id)
  }
}

export default compose(
  withProjects(),
  withProps({ mainProperty: 'projectName' }),
  withHandlers({ deleteHandler })
)(ListView)
