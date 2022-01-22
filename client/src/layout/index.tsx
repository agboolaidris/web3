import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Toobar from '../components/layout/navbar';
interface StyleProps {
  theme?: Theme;
}

const Wrapper = styled(Box)<StyleProps>`
  background: ${({ theme }) => theme.palette.grey[300]};
  min-height: 100vh;
`;

interface Props {
  children: ReactNode;
}

function Index({ children }: Props) {
  return (
    <Wrapper>
      <Toobar />

      {children}
    </Wrapper>
  );
}

export default Index;
