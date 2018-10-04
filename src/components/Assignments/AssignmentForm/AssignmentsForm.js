import React from "react";
import { Formik, Form, Field } from "formik";
import CustomSelect from "./CustomSelect";
import withEmployees from "../../HOCs/withEmployees";
import withProjects from "../../HOCs/withProjects";
import { compose, withHandlers } from "recompose";
import addEvent from "../../../redux/actions/events/addEvent";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const AssignmentsForm = props => (
  <React.Fragment>
    <h2>Crear Asignaciones</h2>

    <Formik onSubmit={props.onSubmit}>
      {({ isSubmitting, handleChange }) => (
        <Form>
          Empleado:
          <CustomSelect
            selectName="employee"
            changeHandler={handleChange}
            items={props.employees}
          />
          <br />
          Proyecto:
          <CustomSelect
            selectName="project"
            changeHandler={handleChange}
            items={props.projects.map(p => p.projectName)}
          />
          <br />
          Desde:
          <Field type="date" name="fromDate" />
          <br />
          Hasta:
          <Field type="date" name="toDate" />
          <br />
          Porcentaje de decicacion:
          <Field type="number" name="dedicationPercentage" />
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
  addEvent
};

const submitHandler = props => (values, actions) => {
  props.addEvent(values).then(() => {
    props.history.push("/");
  });
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({ onSubmit: submitHandler }),
  withEmployees,
  withProjects
)(AssignmentsForm);
