import React from "react";
import { Router, Redirect } from "@reach/router";

import Problem from "routes/problem";
import Overrides from "routes/overrides";
import Themeing from "routes/themeing";

import NavBar from "components/Navbar";

export default () => (
  <Router>
    <Redirect noThrow from="/" to="problem" />
    <NavBar path="/">
      <Problem path="problem" />
      <Overrides path="overrides" />
      <Themeing path="themeing" />
    </NavBar>
  </Router>
);
