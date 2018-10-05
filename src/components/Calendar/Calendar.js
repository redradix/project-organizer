import React from "react";
import { compose, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";

// FullCalendar Libs
import $ from "jquery";
import "fullcalendar";
import "../../../node_modules/fullcalendar/dist/locale/es";

// CSS
import "../../../node_modules/fullcalendar/dist/fullcalendar.min.css";
import "./Calendar.css";
import withEvents from "../HOCs/withEvents";

// Component
const Calendar = props => (
  <div>
    <div id="calendar" />
  </div>
);

const createCalendar = props => {
  $("#calendar").fullCalendar({
    locale: "es",
    themeSystem: "standard",
    customButtons: {
      crearProyecto: {
        text: "Crear Proyecto",
        click: () => {
          props.history.push("/projects");
        }
      },
      crearAsignacion: {
        text: "Crear Asignacion",
        click: () => {
          props.history.push("/assignments");
        }
      }
    },
    header: {
      left: "prev,next today",
      center: "title",
      right: "crearProyecto, crearAsignacion"
    },
    eventClick: calEvent => {
      props.history.push(`/event/${calEvent.id}`);
    }
  });
};

const putLifeCycle = lifecycle({
  componentDidMount() {
    createCalendar(this.props);
  },
  componentDidUpdate() {
    $("#calendar").fullCalendar("removeEvents");
    $("#calendar").fullCalendar("addEventSource", this.props.events);
  }
  // will unmount
});

export default compose(
  withRouter,
  withEvents,
  putLifeCycle
)(Calendar);
