import React, { useRef } from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";

import styled from "styled-components";

const StyledInputGroup = styled(InputGroup)`
  width: 80%;
  margin: 0 auto;

  > div > span {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
  }
`;

const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #7b8a8b;
  border-radius: 0;

  &:focus,
  .form-control:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Search = ({ handleSubmit }) => {
  const _input = useRef();

  const handler = e => {
    e.preventDefault();
    handleSubmit(_input.current.value);
    _input.current.value = "";
  };

  return (
    <form onSubmit={handler}>
      <StyledInputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <StyledInput placeholder="username" innerRef={_input} />
      </StyledInputGroup>
    </form>
  );
};

export default Search;
