import styled from '@emotion/styled';
import { Theme, alpha } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
export const Button = styled(ButtonBase)<{ theme?: Theme }>`
  text-transform: capitalize;
  background: ${({ theme }) => theme.colors.pink};
  height: 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  padding: 0 20px;
  color: ${({ theme }) => theme.palette.common.white};
  width: 100px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => alpha(theme.colors.pink, 0.8)};
  }
`;
