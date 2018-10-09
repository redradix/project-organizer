import { compose, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import ListView from '../../ui/ListView'
import { removeAssignment } from '../../services/assignments/actions'

const mapStateToProps = ({ events }) => ({ items: events })

const deleteHandler = props => id => {
  return function () {
    removeAssignment(id)
  }
}

export default compose(
  connect(mapStateToProps),
  withProps({ mainProperty: 'title' }),
  withHandlers({ deleteHandler })
)(ListView)
