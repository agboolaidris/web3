import React from 'react';
import styled from '@emotion/styled';
import { Stack, Typography, Box, IconButton, Theme } from '@mui/material';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import Ethureum from '../svg/ethureum';
const Card = styled.div`
  background: radial-gradient(
    circle at 80% 60%,
    #dd00ff,
    #ff00d4,
    #ff00ad,
    #ff358d,
    #ff6174,
    #ff8265,
    #ff9e62,
    #ffb56b
  );
  width: 300px;
  max-width: 100%;
  height: 130px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const IconWrap = styled.div<{ theme?: Theme }>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 35px;
    height: 35px;
  }
`;

function EtherumCard() {
  return (
    <Card>
      <Stack justifyContent="space-between" flexDirection="row">
        <IconWrap>
          <Ethureum />
        </IconWrap>
        <IconButton>
          <ArrowCircleUpRoundedIcon />
        </IconButton>
      </Stack>

      <Box>
        <Typography variant="caption"> Address</Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
          Ethereum
        </Typography>
      </Box>
    </Card>
  );
}

export default EtherumCard;
