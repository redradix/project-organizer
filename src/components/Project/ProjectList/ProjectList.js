import React from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import removeProject from "../../../redux/actions/projects/removeProject";

const ProjectList = props => (
  <ul>
    {props.projects &&
      props.projects.map(project => (
        <li key={project.id}>
          {project.projectName}{" "}
          <button onClick={props.deleteHandler} data-id={project.id}>
            Delete
          </button>
        </li>
      ))}
  </ul>
);

const mapStateToProps = ({ projects }) => ({ projects });

const mapDispatchToProps = {
  removeProject
};

const deleteHandler = props => event => {
  const target = event.target;
  const id = target.dataset.id;

  props.removeProject(id);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({ deleteHandler })
)(ProjectList);
