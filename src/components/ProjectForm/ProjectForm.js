import React from "react";
import { Formik, Form, Field } from "formik";
import { withHandlers, compose } from "recompose";

const ProjectForm = props => (
  <React.Fragment>
    <h1>Create Project</h1>

    <Formik
      initialValues={{ projectName: "", client: "" }}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          Project Name:
          <Field type="text" name="projectName" />
          <br />
          Cliente:
          <Field type="text" name="client" />
          <br />
          Presupuesto: Tiempo diseño UX: Numero Sprints Desarrollo y maqueta:
          <button type="submit" disabled={isSubmitting}>
            Crear
          </button>
        </Form>
      )}
    </Formik>
  </React.Fragment>
);

const submitHandler = withHandlers({
  onSubmit: props => (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  }
});

export default compose(submitHandler)(ProjectForm);
