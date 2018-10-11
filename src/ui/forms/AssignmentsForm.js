import React from 'react'
import { Formik, Form, Field } from 'formik'
import PropTypes from 'prop-types'
import CustomSelect from '../inputs/CustomSelect'
import Spinner from '../Spinner'

const AssignmentForm = props => (
  <React.Fragment>
    <h2>{props.formAction} Asignaciones</h2>
    {props.loadingProjects || props.loadingEmployees ? (
      <Spinner />
    ) : (
      <React.Fragment>
        <Formik onSubmit={props.onSubmit} initialValues={props.initialValues}>
          {({ isSubmitting, handleChange, values }) => (
            <Form>
              {props.employees ? (
                <React.Fragment>
                  Empleado:
                  <CustomSelect
                    selectName="employee"
                    changeHandler={handleChange}
                    items={props.employees}
                    value={values.employee}
                  />
                  <br />
                </React.Fragment>
              ) : null}
              {props.projects ? (
                <React.Fragment>
                  Proyecto:
                  <CustomSelect
                    selectName="project"
                    changeHandler={handleChange}
                    items={props.projects.map(p => p.projectName)}
                    value={values.project}
                  />
                  <br />
                </React.Fragment>
              ) : null}
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
                {props.formAction}
              </button>
              {props.deleteHandler ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={props.deleteHandler}
                  data-id={props.initialValues.id}
                >
                  Eliminar
                </button>
              ) : null}
            </Form>
          )}
        </Formik>
      </React.Fragment>
    )}
  </React.Fragment>
)

AssignmentForm.propTypes = {
  formAction: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
  loadingEmployees: PropTypes.bool,
  projects: PropTypes.array.isRequired,
  loadingProjects: PropTypes.bool,
  initialValues: PropTypes.object,
  deleteHandler: PropTypes.func
}

export default AssignmentForm
