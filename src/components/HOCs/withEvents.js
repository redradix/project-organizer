import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import getEvents from '../../redux/actions/events/getEvents'

const mapStateToProps = ({ events }) => ({ events })

const withEvents = compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount () {
      getEvents()
    }
  })
)

export default withEvents
