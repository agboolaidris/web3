import React, { useEffect, useState } from 'react';
import {
  IconButton,
  Typography,
  Toolbar,
  Box,
  Theme,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-scroll';
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

  ${({ theme }) => theme.breakpoints.down('md')} {
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
  ${({ theme }) => theme.breakpoints.down('md')} {
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
  return (
    <Link
      activeClass="active"
      to={item.toLowerCase()}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      style={{ display: 'block', width: '100%' }}
    >
      <List onClick={onClick}>{item}</List>
    </Link>
  );
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
      <Link
        to="top"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        style={{ cursor: 'pointer' }}
      >
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          EasyCoin
        </Typography>
      </Link>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        sx={{ display: { md: 'none' } }}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <CloseRoundedIcon sx={{ color: theme.palette.common.white }} />
        ) : (
          <MenuIcon sx={{ color: theme.palette.common.white }} />
        )}
      </IconButton>

      <Menu open={open}>
        {['Exchange', 'Service', 'Transactions', 'About'].map((item, i) => {
          return (
            <ListItem item={item} onClick={() => setOpen(false)} key={i} />
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
