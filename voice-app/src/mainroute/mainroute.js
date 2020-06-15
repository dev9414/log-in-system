import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import Login from "../component/login/Login";
import Dashboard from "../component/Dashboard"
import  { Redirect } from 'react-router-dom'
function MainRoutes() {

  return (
    <Router>
      <Switch>
     
      <Route path="/Dash" component={Dashboard} />
      <Route path="/" component={Login}  />
     
      </Switch>
    </Router>
  );
}

export default MainRoutes;