import React from "react";
import { Link } from "react-router-dom";
import AssignmentList from "./AssignmentList/AssignmentList";
import withEvents from "../HOCs/withEvents";
import CreateAssignmentForm from "./AssignmentForm/CreateAssignmentForm/CreateAssignmentForm";
import PropTypes from "prop-types";

const Assignments = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <CreateAssignmentForm />
    <h2>Asignaciones</h2>
    <AssignmentList events={props.events} />
  </React.Fragment>
);

Assignments.propTypes = {
  events: PropTypes.array.isRequired
};

export default withEvents(Assignments);
