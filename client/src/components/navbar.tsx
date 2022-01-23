import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, Typography, Toolbar, Box, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from './shared/button';

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

const ToolBar = styled(Toolbar)<{ theme?: Theme; bg: boolean; open?: boolean }>`
  height: 80px;
  color: ${({ theme }) => theme.palette.common.white};
  position: fixed;
  width: 100%;
  z-index: 200;
  ${({ bg, theme }) =>
    bg &&
    css`
      background: ${`${theme.colors.grey}90`};
    `};

  ${({ open, theme }) =>
    open &&
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

  const changeBackground = () => {
    const scroll = window.scrollY;

    if (scroll > 100) {
      setBg(true);
    } else {
      setBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <ToolBar open={open} bg={bg}>
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

        <Button
          sx={{
            marginLeft: { md: '40px' },
            width: { xs: '100%', md: '150px' },
            marginTop: { xs: '10px', md: 0 },
          }}
          onClick={() => setOpen(false)}
        >
          Login
        </Button>
      </Menu>
    </ToolBar>
  );
}
