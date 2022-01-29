import React from 'react';
import styled from '@emotion/styled';
import { IconButton, Theme, Typography, useTheme, alpha } from '@mui/material';
import SecurityUpdateGoodRoundedIcon from '@mui/icons-material/SecurityUpdateGoodRounded';

const Wrapper = styled.div<{ theme?: Theme }>`
  position: relative;
  width: 300px;
  max-width: 100%;
  min-height: 300px;
  box-shadow: 1px 1px 5px 5px ${({ theme }) => theme.colors.grey};
  padding: 30px;
  overflow: hidden;
  .div {
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 200px;
    height: 50px;
    background-color: ${({ theme }) => alpha(theme.colors.grey, 0.6)};
    transform: rotate(-45deg);
  }
  transition: all 0.7s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => alpha(theme.colors.grey, 0.6)};
    color: ${({ theme }) => theme.palette.common.white};
    .div {
      background-color: ${({ theme }) => alpha(theme.colors.pink, 0.6)};
    }
  }
`;
function ServiceCard() {
  const theme = useTheme();
  return (
    <Wrapper>
      <IconButton sx={{ backgroundColor: theme.colors.pink }}>
        <SecurityUpdateGoodRoundedIcon
          sx={{ color: theme.colors.background }}
        />
      </IconButton>
      <Typography variant="h6" sx={{ fontSize: '1.2rem', marginTop: 2 }}>
        Security
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa assumenda
        veniam harum dolorem laborum, officiis temporibus laboriosam inventore
        atque illo iusto voluptate. Magnam quaerat voluptate consequatur aliquam
        alias voluptatum consequuntur?
      </Typography>
      <div className="div"></div>
    </Wrapper>
  );
}

export default ServiceCard;
