import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Donate from "./components/Donate/Donate";
import Contact from "./components/Contact/Contact";
import DonationDetails from "./components/Donate/DonationDetails";
import DonateCheckout from "./components/Donate/DonateCheckout";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/donate" component={Donate} />
    <Route exact path="/donate/details" component={DonationDetails} />
    <Route exact path="/donate/checkout" component={DonateCheckout} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);
