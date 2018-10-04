import { createEvent, getFromAPI } from "../../../api";
import moment from "moment";

const formatEvent = async event => {
  const { employee, project, fromDate, toDate, dedicationPercentage } = event;

  const end = moment(toDate).add(1, "days");
  const color = await getProjectColor(project);

  return {
    title: `${project} - ${employee}`,
    start: fromDate,
    end: end.format("YYYY-MM-DD"),
    backgroundColor: color,
    borderColor: color,
    employee,
    project,
    dedicationPercentage
  };
};

const getProjectColor = async projectName => {
  const response = await getFromAPI("projects");
  const projects = response.data;
  const project = projects.find(value => value.projectName === projectName);

  return project.color;
};

export default function addEvent(event) {
  return async function(dispatch) {
    const formatedEvent = await formatEvent(event);
    return createEvent(formatedEvent).then(({ data }) => {
      dispatch({ type: "ADD_EVENT", event: data });
    });
  };
}
