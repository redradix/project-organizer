import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import getEvents from '../../redux/actions/getEvents';

// FullCalendar Libs
import $ from "jquery";
import "fullcalendar";
import "../../../node_modules/fullcalendar/dist/locale/es";

// CSS
import "../../../node_modules/fullcalendar/dist/fullcalendar.min.css";
import "./Calendar.css";

// Component
const Calendar = props => (
  <div>
    <div id="calendar" />
  </div>
);

const createCalendar = () => {
  $("#calendar").fullCalendar({
    locale: "es",
    themeSystem: "standard",
    customButtons: {
      crearProyecto: {
        text: "Crear Proyecto",
        click: function() {
          alert("Crear Projecto!");
        }
      },
      crearAsignacion: {
        text: "Crear Asignacion",
        click: function() {
          alert("Crear Asignacion!");
        }
      }
    },
    header: {
      left: "prev,next today",
      center: "title",
      right: "crearProyecto, crearAsignacion"
    },
    eventClick: function(calEvent) {
      alert('Event: ' + calEvent.title);
    }
  });
}

const putLifeCycle = lifecycle({
  componentDidMount() {
    this.props.initEvents();
    createCalendar();
  },
  componentDidUpdate() {
    $("#calendar").fullCalendar('removeEvents');
    $("#calendar").fullCalendar('addEventSource', this.props.events)
  }
});

const mapStateToProps = ({events}) => ({events});

const mapDispatchToProps = dispatch => ({
  initEvents() {
    dispatch(getEvents());
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  putLifeCycle
)(Calendar);
