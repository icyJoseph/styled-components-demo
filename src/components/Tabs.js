import React, { useState, useEffect } from "react";

import { ButtonGroup, Button } from "reactstrap";
import styled from "styled-components";

const ButtonGroupWrap = styled.div`
  text-align: center;

  > div button {
    background: ${({ theme }) => theme.grayDark};
    min-width: 8em;
  }

  > div button.selected {
    background-color: ${({ theme }) => theme.danger};
  }
`;

const SELECTED_TAB = "selectedTab";
const getSavedTab = () => parseInt(localStorage.getItem(SELECTED_TAB));

export function Tabs({ children }) {
  const [selectedTab, setSelectedTab] = useState(() => getSavedTab() || 0);

  useEffect(() => {
    const currentlySaved = localStorage.getItem(selectedTab);
    if (currentlySaved !== selectedTab) {
      localStorage.setItem(SELECTED_TAB, selectedTab);
    }
  }, [selectedTab]);

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
