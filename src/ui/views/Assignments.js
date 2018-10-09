import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CreateAssignmentForm from '../../app/assignments/CreateAssignmentForm'
import AssignmentList from '../../app/assignments/AssignmentList'

const Assignments = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <CreateAssignmentForm />
    <h2>Asignaciones</h2>
    <AssignmentList events={props.events} />
  </React.Fragment>
)

Assignments.propTypes = {
  events: PropTypes.array.isRequired
}

export default Assignments
