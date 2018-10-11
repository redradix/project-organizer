import { compose, lifecycle, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withAssignments } from '../../services/assignments/hocs'

// FullCalendar Libs
import $ from 'jquery'
import 'fullcalendar'
import '../../../node_modules/fullcalendar/dist/locale/es'
import Calendar from '../../ui/views/Calendar'

const createCalendar = props => {
  $(`#${props.id}`).fullCalendar({
    locale: 'es',
    themeSystem: 'standard',
    customButtons: {
      crearProyecto: {
        text: 'Crear Proyecto',
        click: () => {
          props.history.push('/projects')
        }
      },
      crearAsignacion: {
        text: 'Crear Asignacion',
        click: () => {
          props.history.push('/assignments')
        }
      }
    },
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'crearProyecto, crearAsignacion'
    },
    eventClick: calEvent => {
      props.history.push(`/assignment/${calEvent.id}`)
    }
  })
}

const createCalendarOnMount = lifecycle({
  componentDidUpdate () {
    if (!this.props.loading) {
      createCalendar(this.props)
      $(`#${this.props.id}`).fullCalendar('removeEvents')
      $(`#${this.props.id}`).fullCalendar(
        'addEventSource',
        this.props.assignments
      )
    }
  }
  // will unmount
})

// const spinner = fn => branch(fn, renderComponent(<Spinner />)

export default compose(
  withRouter,
  withProps({ id: 'myCalendar' }),
  withAssignments(),
  // Branch
  // spinner(props => !!props.loading)
  createCalendarOnMount
)(Calendar)
