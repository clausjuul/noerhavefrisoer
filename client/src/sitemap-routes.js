import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default (
  <Router>
    <Route exact path="/behandlinger" />
    <Route exact path="/booking" />
    <Route exact path="/om-salonen" />
  </Router>
);
