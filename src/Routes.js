import React from "react";
import { Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
// import Notfound from "./containers/NotFound";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    {/* <Route component={NotFound} /> */}
  </Switch>;