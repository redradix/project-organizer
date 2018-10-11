import { compose, withHandlers, withProps } from 'recompose'
import { removeProject } from '../../services/projects/actions'
import ListView from '../../ui/ListView'

const deleteHandler = props => id => {
  return function () {
    removeProject(id)
  }
}

export default compose(
  withProps({ mainProperty: 'projectName' }),
  withHandlers({ deleteHandler })
)(ListView)
