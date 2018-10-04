import { compose, withHandlers, withProps } from "recompose";
import { connect } from "react-redux";
import ListView from "../../ListView/ListView";
import removeEvent from "../../../redux/actions/events/removeEvent";

const mapStateToProps = ({ events }) => ({ items: events });

const mapDispatchToProps = {
  removeEvent
};

const deleteHandler = props => event => {
  const target = event.target;
  const id = target.dataset.id;

  props.removeEvent(id);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withProps({ mainProperty: "title" }),
  withHandlers({ deleteHandler })
)(ListView);
