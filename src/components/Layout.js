import React from "react";
import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  justify-content: center;
`;

export const Layout = styled.div`
  width: 80%;
  ${flexBox}
  align-items: flex-start;
  padding: 2em;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

Layout.Element = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  ${flexBox}
  margin: 1em;
`;

export default Layout;
