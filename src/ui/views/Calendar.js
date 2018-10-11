import React from 'react'

// CSS
import '../../../node_modules/fullcalendar/dist/fullcalendar.min.css'
import { PropTypes } from 'prop-types'
import Spinner from '../Spinner'
const calendarStyles = {
  width: '800px',
  margin: '0 auto'
}

// Component
const Calendar = props => (
  <div>
    {props.loadingAssignments ? (
      <Spinner />
    ) : (
      <div id={props.id} style={calendarStyles} />
    )}
  </div>
)

Calendar.propTypes = {
  id: PropTypes.string.isRequired,
  loadingAssignments: PropTypes.bool
}

export default Calendar
