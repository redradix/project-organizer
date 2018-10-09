import { compose, withState, lifecycle } from 'recompose'
import { getFromAPI } from '../../api'

const withProjects = compose(
  withState('projects', 'setProjects', []),
  lifecycle({
    componentDidMount () {
      getFromAPI('projects').then(({ data }) => this.props.setProjects(data))
    }
  })
)

export default withProjects
