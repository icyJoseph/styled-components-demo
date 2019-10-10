import React from "react";
import styled from "styled-components";
import Button from "react-bulma-components/lib/components/button";

const OverridesLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  flex-wrap: wrap;
 
  > * {
    min-width: 200px;
    max-width: 250px;
    margin: 1em;
  }
`;

export default () => (
  <OverridesLayout>
    <Button color="primary">Primary</Button>
    <Button renderAs="a" color="link">
      Link
    </Button>
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="dark">Dark</Button>
  </OverridesLayout>
);