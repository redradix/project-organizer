import React from 'react'
import { Link } from 'react-router-dom'
import ProjectForm from '../../app/projects/ProjectForm'
import ProjectList from '../../app/projects/ProjectList'
import { PropTypes } from 'prop-types'
import { withProjects } from '../../services/projects/hocs'
import Spinner from '../Spinner'

const Project = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <ProjectForm />
    <h2>Proyectos</h2>
    {props.loadingProjects ? (
      <Spinner />
    ) : (
      <ProjectList items={props.projects} />
    )}
  </React.Fragment>
)

Project.propTypes = {
  projects: PropTypes.array,
  loadingProjects: PropTypes.bool
}

export default withProjects()(Project)
