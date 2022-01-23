import React from 'react';
import { Grid, Container, Box, Theme } from '@mui/material';
import InputText from './shared/inputText';
import EthereumCard from './shared/etherumCard';
import styled from '@emotion/styled';
const Form = styled.form<{ theme?: Theme }>`
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.colors.grey};
`;
function Index() {
  return (
    <Container sx={{ paddingY: { md: 15, xs: 5 } }}>
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
        <Grid md={6} xs={12} sx={{ marginY: { xs: 10, md: 0 } }}>
          <Form>
            <InputText />
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
