import React from "react";
import { Link } from "react-router-dom";
import AssignmentList from "./AssignmentList/AssignmentList";
import withEvents from "../HOCs/withEvents";
import CreateAssignmentForm from "./AssignmentForm/CreateAssignmentForm/CreateAssignmentForm";

const Assignments = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <CreateAssignmentForm />
    <h2>Asignaciones</h2>
    <AssignmentList events={props.events} />
  </React.Fragment>
);

export default withEvents(Assignments);
