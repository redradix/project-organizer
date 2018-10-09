import { connect } from 'react-redux'

const mapStateToProps = ({ events }, ownProps) => ({
  event: findEventById(events, ownProps)
})

const findEventById = (events, props) => {
  return events.find(value => value.id === parseInt(props.match.params.id))
}

export default connect(mapStateToProps)
