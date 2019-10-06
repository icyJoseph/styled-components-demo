import React from "react";
import { Router, Redirect } from "@reach/router";

import Cards from "routes/cards";
import Overrides from "routes/overrides";
import Theming from "routes/theming";

import NavBar from "components/Navbar";

const NotFound = () => <Redirect noThrow to="/cards" />;

export default () => (
  <Router>
    <Redirect noThrow from="/" to="cards" />
    <NavBar path="/">
      <Cards path="cards" />
      <Overrides path="overrides" />
      <Theming path="theming" />
      <NotFound default />
    </NavBar>
  </Router>
);
