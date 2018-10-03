import axios from "axios";

const baseURL = "http://localhost:5000";

const getFromAPI = concept => axios.get(`${baseURL}/${concept}`);

const createProject = project => axios.post(`${baseURL}/projects`, project);
const createAssignment = assignment =>
  axios.post(`${baseURL}/assignments`, assignment);
const createEvent = event => axios.post(`${baseURL}/events`, event);

const removeProjectFromDB = projectId =>
  axios.delete(`${baseURL}/projects/${projectId}`);

export {
  getFromAPI,
  createProject,
  createAssignment,
  createEvent,
  removeProjectFromDB
};
