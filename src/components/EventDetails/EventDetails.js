import React from 'react'
import { compose } from 'recompose'
import withEvents from '../HOCs/withEvents'
import withSelectedEvent from '../HOCs/withSelectedEvent'
import { Link } from 'react-router-dom'
import moment from 'moment'
import EditAssignmentForm from './EditAssignmentForm/EditAssignmentForm'
import PropTypes from 'prop-types'

const EventDetails = props => (
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

        <EditAssignmentForm initialValues={buildInitialValues(props.event)} />
      </React.Fragment>
    ) : null}
  </React.Fragment>
)

EventDetails.propTypes = {
  event: PropTypes.object
}

const buildInitialValues = event => {
  const { start, end, employee, project, dedicationPercentage, id } = event

  const toDate = moment(end)
    .subtract(1, 'days')
    .format('YYYY-MM-DD')

  return {
    id,
    employee,
    project,
    dedicationPercentage,
    fromDate: start,
    toDate
  }
}

export default compose(
  withEvents,
  withSelectedEvent
)(EventDetails)
