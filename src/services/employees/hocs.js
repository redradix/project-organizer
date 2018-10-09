import { compose, withState, lifecycle } from 'recompose'
import { getFromAPI } from '../api'

export const withEmployees = () =>
  compose(
    withState('employees', 'setEmployees', []),
    lifecycle({
      componentDidMount () {
        getFromAPI('employees').then(({ data }) =>
          this.props.setEmployees(data)
        )
      }
    })
  )
