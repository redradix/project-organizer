import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import EditAssignmentForm from '../../app/assignments/EditAssignmentForm'

const AssignmentDetails = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    {props.event ? (
      <React.Fragment>
        <h2>{props.event.title}</h2>
        <p>Empleado: {props.event.employee}</p>
        <p>Proyecto: {props.event.project}</p>
        <p>Fecha Inicio: {props.event.start}</p>
        <p>Fecha Fin: {props.event.end}</p>
        <p>Porcentaje Dedicacion: {props.event.dedicationPercentage}</p>

        <EditAssignmentForm
          initialValues={props.buildInitialValues(props.event)}
        />
      </React.Fragment>
    ) : null}
  </React.Fragment>
)

AssignmentDetails.propTypes = {
  event: PropTypes.object,
  buildInitialValues: PropTypes.func
}

export default AssignmentDetails
