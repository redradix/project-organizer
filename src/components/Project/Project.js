import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import { compose, lifecycle } from "recompose";
import getProjects from "../../redux/actions/projects/getProjects";

const Project = props => (
  <React.Fragment>
    <Link to="/">Calendario</Link>
    <ProjectForm />
    <h2>Proyectos</h2>
    <ProjectList projects={props.projects} />
  </React.Fragment>
);

const mapStateToProps = ({ projects }) => ({ projects });

const mapDispatchToProps = {
  getProjects
};

const putLifeCycle = lifecycle({
  componentDidMount() {
    this.props.getProjects();
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  putLifeCycle
)(Project);
