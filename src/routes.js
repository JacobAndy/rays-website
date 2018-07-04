import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Donate from "./components/Donate/Donate";
import Contact from "./components/Contact/Contact";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/donate" component={Donate} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);
