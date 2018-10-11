import { compose, withState, lifecycle } from 'recompose'
import axios from 'axios'

export const withEmployees = () =>
  compose(
    withState('employees', 'setEmployees', []),
    withState('loadingEmployees', 'setLoadingEmployees', true),
    lifecycle({
      componentDidMount () {
        axios.get('http://localhost:5000/employees').then(({ data }) => {
          this.props.setEmployees(data)
          this.props.setLoadingEmployees(false)
        })
      }
    })
  )
