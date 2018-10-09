import React from 'react'
import { Link } from 'react-router-dom'
import ProjectForm from '../../app/projects/ProjectForm'
import ProjectList from '../../app/projects/ProjectList'
import { PropTypes } from 'prop-types'

const Project = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <ProjectForm />
    <h2>Proyectos</h2>
    <ProjectList projects={props.projects} />
  </React.Fragment>
)

Project.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Project
