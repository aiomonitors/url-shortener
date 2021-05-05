import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid #283747;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  box-sizing: border-box;
  padding: 5px 10px;
  outline: none;
  background-color: transparent;
  color: #283747;
  margin-bottom: 5px;
`;

export interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Input = ({ value, placeholder, onChange }: InputProps): JSX.Element => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
    />
  );
};

export default Input;
