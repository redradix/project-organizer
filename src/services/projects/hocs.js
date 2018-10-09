import { compose, lifecycle } from 'recompose'
import { getProjects } from './actions'
import { connect } from 'react-redux'

export const withProjects = () => {
  const mapStateToProps = ({ projects }) => ({ projects })

  return compose(
    connect(mapStateToProps),
    lifecycle({
      componentDidMount () {
        getProjects()
      }
    })
  )
}
