import { compose, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import ListView from '../../ListView/ListView'
import removeEvent from '../../../redux/actions/events/removeEvent'

const mapStateToProps = ({ events }) => ({ items: events })

const deleteHandler = props => id => {
  return function () {
    removeEvent(id)
  }
}

export default compose(
  connect(mapStateToProps),
  withProps({ mainProperty: 'title' }),
  withHandlers({ deleteHandler })
)(ListView)
