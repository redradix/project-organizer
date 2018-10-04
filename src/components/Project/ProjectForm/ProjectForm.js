import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { withHandlers, compose } from "recompose";
import addProject from "../../../redux/actions/projects/addProject";
import getRandomColor from "../../../colors";

const ProjectForm = props => (
  <React.Fragment>
    <h2>Crear Proyecto</h2>

    <Formik onSubmit={props.onSubmit} enableReinitialize={true}>
      {({ isSubmitting }) => (
        <Form>
          Nombre del proyecto:
          <Field type="text" name="projectName" />
          <br />
          Cliente:
          <Field type="text" name="client" />
          <br />
          Presupuesto:
          <Field type="number" name="budget" />
          <br />
          Tiempo diseño UX:
          <Field type="number" name="designTime" />
          <br />
          Numero Sprints Desarrollo y maqueta:
          <Field type="number" name="developmentSprints" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Crear
          </button>
        </Form>
      )}
    </Formik>
  </React.Fragment>
);

const mapStateToProps = ({ projects }) => ({ projects });

const mapDispatchToProps = {
  addProject
};

const submitHandler = props => (values, actions) => {
  values.color = getRandomColor();
  props.addProject(values).then(() => {
    actions.resetForm({});
    actions.setSubmitting(false);
  });
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({ onSubmit: submitHandler })
)(ProjectForm);
