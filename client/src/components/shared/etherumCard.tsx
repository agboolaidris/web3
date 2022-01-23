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
  box-shadow: 5px 5px 0px 0px #ffb56b, 10px 10px 0px 0px #ff00d4,
    15px 15px 0px 0px #ff00ad, 20px 20px 0px 0px #ffb56b,
    25px 25px 0px 0px #e1eeff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
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
