import React from 'react'
import { Route } from 'react-router-dom'
import Calendar from './Calendar/Calendar'
import Project from './Project/Project'
import Assignments from './Assignments/Assignments'
import EventDetails from './EventDetails/EventDetails'

const Routes = props => (
  <React.Fragment>
    <Route exact path="/" component={Calendar} />
    <Route path="/projects" component={Project} />
    <Route path="/assignments" component={Assignments} />
    <Route path="/event/:id" component={EventDetails} />
  </React.Fragment>
)

export default Routes
