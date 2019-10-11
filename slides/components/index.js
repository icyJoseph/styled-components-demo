import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  color: palevioletred;
  padding: 4em;
  width: 100%;
  height: 100%;
  background: papayawhip;
`;

export const Container = styled.section`
  background: papayawhip;
  height: 100%;
  width: 100%;
  padding: 4em;
  color: palevioletred;

  @media (min-width: ${({ theme }) => theme.breakpoint || "982px"}) {
    color: white;
    background: #78c2ad;
  }
`;