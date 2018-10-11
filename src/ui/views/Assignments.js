import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CreateAssignmentForm from '../../app/assignments/CreateAssignmentForm'
import AssignmentList from '../../app/assignments/AssignmentList'
import Spinner from '../Spinner'
import { withAssignments } from '../../services/assignments/hocs'

const Assignments = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <CreateAssignmentForm />
    <h2>Asignaciones</h2>
    {props.loadingAssignments ? (
      <Spinner />
    ) : (
      <AssignmentList items={props.assignments} />
    )}
  </React.Fragment>
)

Assignments.propTypes = {
  assignments: PropTypes.array.isRequired,
  loadingAssignments: PropTypes.bool,
  loadingProjects: PropTypes.bool
}

export default withAssignments()(Assignments)
