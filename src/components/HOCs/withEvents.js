import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import getEvents from "../../redux/actions/events/getEvents";

const mapStateToProps = ({ events }) => ({ events });

const mapDispatchToProps = {
  getEvents
};

const withEvents = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getEvents();
    }
  })
);

export default withEvents;
