import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from "../Calendar";
import Project from "../Project";
import Assignments from "../Assignments";

const App = props => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Calendar} />
      <Route path="/projects" component={Project} />
      <Route path="/assignments" component={Assignments} />
    </React.Fragment>
  </Router>
);

export default App;
