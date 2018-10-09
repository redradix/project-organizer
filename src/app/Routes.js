import React from 'react'
import { Route } from 'react-router-dom'
import Calendar from './calendar/Calendar'
import Project from '../ui/views/Project'
import Assignments from '../ui/views/Assignments'
import AssignmentDetails from '../ui/views/AssignmentsDetails'

const Routes = props => (
  <React.Fragment>
    <Route exact path="/" component={Calendar} />
    <Route path="/projects" component={Project} />
    <Route path="/assignments" component={Assignments} />
    <Route path="/assignment/:id" component={AssignmentDetails} />
  </React.Fragment>
)

export default Routes
