import React from 'react'

// CSS
import '../../../node_modules/fullcalendar/dist/fullcalendar.min.css'
import { PropTypes } from 'prop-types'
const calendarStyles = {
  width: '800px',
  margin: '0 auto'
}

// Component
const Calendar = props => (
  <div>
    <div id={props.id} style={calendarStyles} />
  </div>
)

Calendar.propTypes = {
  id: PropTypes.string.isRequired
}

export default Calendar
