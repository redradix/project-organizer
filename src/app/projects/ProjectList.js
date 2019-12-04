import { compose, withHandlers, withProps } from 'recompose'
import { removeProject } from '../../services/projects/actions'
import ListView from '../../ui/ListView'
import { connect } from 'react-redux'

export default compose(
  connect(null, { removeProject }),

  withProps({ mainProperty: 'projectName' }),
  withHandlers({
    deleteHandler: props => id => () => {
      props.removeProject(id)
    },
  }),
)(ListView)
