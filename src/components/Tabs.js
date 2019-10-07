import React, { useState } from "react";

import { ButtonGroup, Button } from "reactstrap";
import styled from "styled-components";

const ButtonGroupWrap = styled.div`
  text-align: center;

  > div button {
    background: ${({ theme }) => theme.grayDark};
  }

  > div button.selected {
    background-color: ${({ theme }) => theme.danger};
  }
`;

export function Tabs({ children }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const buttons = React.Children.toArray(children).map(
    ({ props: { name } }, index) => (
      <Button
        key={name}
        className={index === selectedTab ? "selected" : ""}
        onClick={() => setSelectedTab(index)}
      >
        {name}
      </Button>
    )
  );

  const tabs = React.Children.toArray(children).map((child, index) => (
    <div key={index} hidden={index !== selectedTab}>
      {child}
    </div>
  ));

  return (
    <>
      <ButtonGroupWrap>
        <ButtonGroup>{buttons}</ButtonGroup>
      </ButtonGroupWrap>
      {tabs}
    </>
  );
}

export default Tabs;
