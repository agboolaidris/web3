import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { IconButton, Theme, Typography, useTheme, alpha } from '@mui/material';

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

interface Props {
  title: string;
  content: string;
  icon: ReactNode;
}
function ServiceCard({ title, content, icon }: Props) {
  const theme = useTheme();
  return (
    <Wrapper>
      <IconButton sx={{ backgroundColor: theme.colors.pink }}>
        {icon}
      </IconButton>
      <Typography variant="h6" sx={{ fontSize: '1.2rem', marginTop: 2 }}>
        {title}
      </Typography>
      <Typography>{content}</Typography>
      <div className="div"></div>
    </Wrapper>
  );
}

export default ServiceCard;
