import { compose, withHandlers, withProps } from 'recompose'
import { removeAssignment } from '../../services/assignments/actions'
import ListView from '../../ui/ListView'
import { connect } from 'react-redux'

export default compose(
  connect(null, { removeAssignment }),
  withProps({ mainProperty: 'title' }),
  withHandlers({
    deleteHandler: props => id => () => {
      props.removeAssignment(id)
    },
  }),
)(ListView)
