import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
`;

export const Layout = styled.div`
  width: 80%;
  ${flexBox}
  justify-content: space-between;
  padding: 2em;
  margin: 0 auto;
`;

Layout.Element = styled.div`
  ${flexBox}
  flex: 1;
  justify-content: center;
`;
