import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  IconButton,
  Typography,
  Toolbar,
  Box,
  Theme,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Button = styled.button<{ theme?: Theme; active?: boolean }>`
  width: 150px;
  text-transform: capitalize;
  background: ${({ theme }) => theme.colors.pink};
  height: 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.palette.common.white};
  margin-left: 40px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => alpha(theme.colors.pink, 0.8)};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 0px;
    width: 100%;
    margin: 0;
    margin-top: 10px;
    text-align: center;
    padding: 10px;
  }
`;
const List = styled.li<{ theme?: Theme; active?: boolean }>`
  margin-left: 40px;
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 0px;
    width: 100%;
    margin: 0;
    margin-top: 10px;
    text-align: center;
    padding: 10px;
  }
`;

const Menu = styled.ul<{ theme?: Theme; open: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 200;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey};
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0px 20px 20px;
    transform: translate(-100%);
    transition: all 0.3s ease-in;
    ${({ open }) =>
      open &&
      css`
        transform: translate(0%);
      `}
  }
`;

const ToolBar = styled(Toolbar)<{ theme?: Theme; bg: boolean }>`
  height: 80px;
  color: ${({ theme }) => theme.palette.common.white};
  position: fixed;
  width: 100%;
  z-index: 200;
  ${({ bg, theme }) =>
    bg &&
    css`
      background: ${theme.colors.grey};
    `};
`;

const ListItem = ({ item, onClick }: { item: string; onClick: () => void }) => {
  // const [active, setActive] = useState(false);
  return <List onClick={onClick}>{item}</List>;
};

export default function Index() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState(false);
  return (
    <ToolBar bg={open ? true : bg}>
      <Typography variant="h6" component="div" sx={{ mr: 2 }}>
        EasyCoin
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        sx={{ display: { sm: 'none' } }}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <CloseRoundedIcon sx={{ color: theme.palette.common.white }} />
        ) : (
          <MenuIcon sx={{ color: theme.palette.common.white }} />
        )}
      </IconButton>

      <Menu open={open}>
        {['Exchange', 'Wallets', 'Market', 'Service'].map((item, i) => {
          return (
            <ListItem item={item} key={i} onClick={() => setOpen(false)} />
          );
        })}

        <Button onClick={() => setOpen(false)}>LOGIN</Button>
      </Menu>
    </ToolBar>
  );
}
