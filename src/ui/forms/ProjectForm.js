import React from 'react'
import { Formik, Form, Field } from 'formik'
import PropTypes from 'prop-types'

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
)

ProjectForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ProjectForm
