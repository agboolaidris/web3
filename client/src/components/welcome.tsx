import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Typography, Theme } from '@mui/material';
import EthereumIcon from './svg/ethureum';
import { Button } from './shared/button';
import { connectToWallet } from '../utils/contract';

const Wrap = styled.div<{ theme?: Theme }>`
  background-color: #5e6c86;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%235E6C86' cx='50' cy='0' r='50'/%3E%3Cg fill='%235b6d8f' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23596e99' cx='50' cy='100' r='50'/%3E%3Cg fill='%23586ea2' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23576eab' cx='50' cy='200' r='50'/%3E%3Cg fill='%23586eb4' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23596ebd' cx='50' cy='300' r='50'/%3E%3Cg fill='%235c6dc5' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23606ccd' cx='50' cy='400' r='50'/%3E%3Cg fill='%23666bd4' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%236c69db' cx='50' cy='500' r='50'/%3E%3Cg fill='%237467e2' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%237d64e8' cx='50' cy='600' r='50'/%3E%3Cg fill='%238760ed' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23925bf2' cx='50' cy='700' r='50'/%3E%3Cg fill='%239d56f6' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a94ff9' cx='50' cy='800' r='50'/%3E%3Cg fill='%23b646fc' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c23afe' cx='50' cy='900' r='50'/%3E%3Cg fill='%23d029ff' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23D0F' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
  color: ${({ theme }) => theme.palette.common.white};
  min-height: min(100vh, 1000px);
  padding-top: 100px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    min-height: 100vh;
  }
`;

const IconWrap = styled.div<{ theme?: Theme }>`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
    height: 50px;
  }
`;

function Index() {
  return (
    <Wrap>
      <Container sx={{ paddingY: { md: 10, xs: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'flex-start', sm: 'center' },
            alignItems: { xs: 'flex-start', sm: 'center' },
          }}
        >
          <IconWrap>
            <EthereumIcon />
          </IconWrap>

          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '2rem', md: '4em' }, marginTop: 1 }}
          >
            Send crypto across the World
          </Typography>

          <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
            EasyCoin is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </Typography>
          <Button
            sx={{ width: { xs: '100%', sm: '400px' }, marginTop: 2 }}
            onClick={connectToWallet}
          >
            Connect Wallet
          </Button>
        </Box>
      </Container>
    </Wrap>
  );
}

export default Index;
