import React from "react";
import { Link } from "react-router-dom";
import AssignmentForm from "./AssignmentForm";
import AssignmentList from "./AssignmentList/AssignmentList";
import withEvents from "../HOCs/withEvents";

const Assignments = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <AssignmentForm />
    <h2>Asignaciones</h2>
    <AssignmentList events={props.events} />
  </React.Fragment>
);

export default withEvents(Assignments);
