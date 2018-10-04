import React from "react";
import { Formik, Form, Field } from "formik";
import CustomSelect from "./CustomSelect/CustomSelect";

const AssignmentForm = props => (
  <React.Fragment>
    <h2>{props.title}</h2>

    <Formik onSubmit={props.onSubmit} initialValues={props.initialValues}>
      {({ isSubmitting, handleChange, values }) => (
        <Form>
          Empleado:
          <CustomSelect
            selectName="employee"
            changeHandler={handleChange}
            items={props.employees}
            value={values.employee}
          />
          <br />
          Proyecto:
          <CustomSelect
            selectName="project"
            changeHandler={handleChange}
            items={props.projects.map(p => p.projectName)}
            value={values.project}
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
          {props.initialValues ? (
            <input
              type="hidden"
              name="id"
              value={props.initialValues.id}
              changeHandler={handleChange}
            />
          ) : null}
          <button type="submit" disabled={isSubmitting}>
            Crear
          </button>
        </Form>
      )}
    </Formik>
  </React.Fragment>
);

export default AssignmentForm;
