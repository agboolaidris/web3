import React from 'react';
import styled from '@emotion/styled';
import { Theme, Typography, Box, Stack } from '@mui/material';
import Ethureum from '../svg/ethureum';
const Wrapper = styled.div<{ theme?: Theme }>`
  position: relative;
  width: 300px;
  max-width: 100%;
  min-height: 100px;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
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
function ServiceCard() {
  return (
    <Wrapper>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bolder' }}>
            Amount: <Typography variant="caption"> 0.00ETH</Typography>
          </Typography>
        </Box>
        <IconWrap>
          <Ethureum />
        </IconWrap>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginTop: 3 }}
      >
        <Box>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bolder' }}>
            FROM:
          </Typography>
          <Typography variant="caption"> XT425..6D6</Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '0.8rem',
              fontWeight: 'bolder',
            }}
          >
            TO:
          </Typography>
          <Typography variant="caption"> PT25..6D6</Typography>
        </Box>
      </Stack>
    </Wrapper>
  );
}

export default ServiceCard;
