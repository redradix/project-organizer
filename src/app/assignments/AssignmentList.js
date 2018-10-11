import { compose, withHandlers, withProps } from 'recompose'
import { removeAssignment } from '../../services/assignments/actions'
import ListView from '../../ui/ListView'

const deleteHandler = props => id => {
  return function () {
    removeAssignment(id)
  }
}

export default compose(
  withProps({ mainProperty: 'title' }),
  withHandlers({ deleteHandler })
)(ListView)
