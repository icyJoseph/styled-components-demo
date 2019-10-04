import React, { useState } from "react";
import { Link } from "@reach/router";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from "reactstrap";

const sub = "*";

export default ({ children, [sub]: current }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(x => !x);
  return (
    <>
      <Navbar expand="md">
        <NavbarBrand href="/">Evolve + AdFenix</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/problem">
                Problem
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/overrides">
                Overrides
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/theming">
                Theming
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {children}
    </>
  );
};
