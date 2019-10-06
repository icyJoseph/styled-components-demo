import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from "reactstrap";

const sub = "*";

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

const StyledNavbar = styled(Navbar)`
  background: ${({ theme }) => theme[theme.name]};
  > *,
  * a {
    color: ${({ theme }) => theme.info};
  }
`;

export default ({ children, [sub]: current }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(x => !x);
  const routes = React.Children.map(
    children,
    ({ props: { children } }) => children
  )
    .map(({ props: { path } }) => path)
    .filter(e => e);

  return (
    <>
      <StyledNavbar expand="md">
        <NavbarBrand href="/">Evolve + AdFenix</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            {routes.map(route => (
              <NavItem key={route}>
                <Link className="nav-link" to={`/${route}`}>
                  {capitalize(route)}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </StyledNavbar>
      {children}
    </>
  );
};
