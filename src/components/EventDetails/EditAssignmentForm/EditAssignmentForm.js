import removeEvent from "../../../redux/actions/events/removeEvent";
import addEvent from "../../../redux/actions/events/addEvent";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, withHandlers, withProps } from "recompose";
import withEmployees from "../../HOCs/withEmployees";
import withProjects from "../../HOCs/withProjects";
import AssignmentForm from "../../Assignments/AssignmentForm/AssignmentsForm";

const mapStateToProps = ({ projects }) => ({ projects });

const mapDispatchToProps = {
  removeEvent,
  addEvent
};

const submitHandler = props => values => {
  props
    .removeEvent(values.id)
    .then(() => props.addEvent(values))
    .then(() => {
      props.history.push("/");
    });
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({ onSubmit: submitHandler }),
  withEmployees,
  withProjects,
  withProps({ title: "Editar Asignaciones" })
)(AssignmentForm);
