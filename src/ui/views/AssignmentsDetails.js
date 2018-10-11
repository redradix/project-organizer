import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import EditAssignmentForm from '../../app/assignments/EditAssignmentForm'

const AssignmentDetails = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    {props.assignment ? (
      <React.Fragment>
        <h2>{props.assignment.title}</h2>
        <p>Empleado: {props.assignment.employee}</p>
        <p>Proyecto: {props.assignment.project}</p>
        <p>Fecha Inicio: {props.assignment.start}</p>
        <p>Fecha Fin: {props.assignment.end}</p>
        <p>Porcentaje Dedicacion: {props.assignment.dedicationPercentage}</p>

        <EditAssignmentForm
          initialValues={props.buildInitialValues(props.assignment)}
        />
      </React.Fragment>
    ) : null}
  </React.Fragment>
)

AssignmentDetails.propTypes = {
  assignment: PropTypes.object,
  buildInitialValues: PropTypes.func
}

export default AssignmentDetails
