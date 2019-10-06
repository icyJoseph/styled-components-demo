import React from "react";
import styled from "styled-components";

const SwitchWrap = styled.div`
  text-align: center;

  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: ${({ isOn }) => (isOn ? "#06D6A0" : "grey")};
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  .react-switch-label .react-switch-button {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 60px;
  }
`;

export const Switch = ({ id, name, label, isOn, handleToggle }) => {
  return (
    <SwitchWrap isOn={isOn}>
      <input
        id={id}
        className="react-switch-checkbox"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <label className="react-switch-label" htmlFor={id}>
        <span className="react-switch-button"></span>
      </label>
      <span>{label}</span>
    </SwitchWrap>
  );
};

export default Switch;
