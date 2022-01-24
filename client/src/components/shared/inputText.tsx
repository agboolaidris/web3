import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { IconButton, Theme } from '@mui/material';
const InputWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:focus-within {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 10px;
  }
`;
interface Props {
  placeholder: string;
  Icon?: ReactNode;
  value: string;
  onChange: (string) => void;
}
function InputText({ placeholder, Icon, value, onChange }: Props) {
  return (
    <InputWrapper>
      {Icon && <IconButton>{Icon}</IconButton>}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputWrapper>
  );
}

export default InputText;
