import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";

import getEvents from "../../redux/actions/events/getEvents";

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
    eventClick: function(calEvent) {
      alert("Event: " + calEvent.title);
    }
  });
};

const putLifeCycle = lifecycle({
  componentDidMount() {
    this.props.getEvents();
    createCalendar(this.props);
  },
  componentDidUpdate() {
    $("#calendar").fullCalendar("removeEvents");
    $("#calendar").fullCalendar("addEventSource", this.props.events);
  }
});

const mapStateToProps = ({ events }) => ({ events });

const mapDispatchToProps = {
  getEvents
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  putLifeCycle
)(Calendar);
