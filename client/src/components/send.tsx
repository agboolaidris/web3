import React from 'react';
import { Grid, Container, Box, Theme } from '@mui/material';
import InputText from './shared/inputText';
import EthereumCard from './shared/etherumCard';
import styled from '@emotion/styled';
const Form = styled.form<{ theme?: Theme }>`
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.grey};
  padding: 10px;
  border-radius: 10px;
`;
function Index() {
  return (
    <Container sx={{ paddingY: 5 }}>
      <Grid container width="100%" spacing={1}>
        <Grid md={6} xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <EthereumCard />
          </Box>
        </Grid>
        <Grid md={6} xs={12} sx={{ marginY: { xs: 2, md: 0 } }}>
          <Form>
            <InputText />
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
