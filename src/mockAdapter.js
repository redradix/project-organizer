import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

mock.onGet("/api/events").reply(200, {
  events: [
    {
      title: "event1",
      start: "2018-10-02"
    },
    {
      title: "event2",
      start: "2018-10-03",
      end: "2018-10-07"
    },
    {
      title: "event3",
      start: "2018-10-06T12:30:00",
      allDay: false // will make the time show
    }
  ]
});

export default "";
