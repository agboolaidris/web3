import React, { ReactNode, useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IconButton, Theme } from '@mui/material';
const InputWrapper = styled.div<{ theme?: Theme; error?: boolean }>`
  width: 100%;

  div {
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
    ${({ error, theme }) =>
      error &&
      css`
        border: 2px solid ${theme.palette.warning.main};
      `},
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      padding: 10px 10px 10px 0;
    }
  }

  span {
    font-size: 0.7rem;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.palette.warning.main};
  }
`;
interface Props {
  placeholder: string;
  Icon?: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
  name: string;
}
function InputText({
  placeholder,
  Icon,
  value,
  onChange,
  type,
  error,
  name,
}: Props) {
  const err = useMemo(() => error, [error]);
  return (
    <InputWrapper error={err ? err.length > 0 : false}>
      <div>
        {Icon && <IconButton>{Icon}</IconButton>}
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          type={type}
          name={name}
        />
      </div>
      {err && err.length > 0 && <span>{err}</span>}
    </InputWrapper>
  );
}

export default InputText;
