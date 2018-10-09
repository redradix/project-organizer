import { compose, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import removeProject from '../../../redux/actions/projects/removeProject'
import ListView from '../../ListView/ListView'

const mapStateToProps = ({ projects }) => ({ items: projects })

const deleteHandler = props => id => {
  return function () {
    removeProject(id)
  }
}

export default compose(
  connect(mapStateToProps),
  withProps({ mainProperty: 'projectName' }),
  withHandlers({ deleteHandler })
)(ListView)
