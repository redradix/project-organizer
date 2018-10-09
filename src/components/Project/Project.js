import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProjectForm from './ProjectForm/ProjectForm'
import ProjectList from './ProjectList/ProjectList'
import { compose, lifecycle } from 'recompose'
import getProjects from '../../redux/actions/projects/getProjects'

const Project = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <ProjectForm />
    <h2>Proyectos</h2>
    <ProjectList projects={props.projects} />
  </React.Fragment>
)

const mapStateToProps = ({ projects }) => ({ projects })

const putLifeCycle = lifecycle({
  componentDidMount () {
    getProjects()
  }
})

export default compose(
  connect(mapStateToProps),
  putLifeCycle
)(Project)
