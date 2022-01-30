import React, { useEffect } from 'react';
import { Container, Typography, Box, Stack, useTheme } from '@mui/material';
import TransactionCard from './shared/TransactionCard';

function Transactions() {
  useEffect(() => {
    const transactionContract = getEthereumContract();
  }, []);

  const theme = useTheme();
  return (
    <Container sx={{ paddingY: { xs: '40px', md: '70px' } }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        spacing={8}
      >
        <Box
          sx={{
            width: 'fixed-content',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '2.5rem',
              fontFamily: 'Princess Sofia',
              display: { md: 'none' },
            }}
          >
            Transaction
          </Typography>
          <Box
            sx={{
              width: '150px',
              height: '2px',
              background: theme.colors.pink,
              marginX: 'auto',
              borderRadius: 5,
              display: { md: 'none' },
            }}
          ></Box>
          <Typography
            sx={{
              marginTop: 1,
              opacity: '0.7',
              fontSize: { md: '3.5rem' },
              fontFamily: { md: 'Princess Sofia' },
            }}
          >
            latest transactions
          </Typography>
        </Box>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 5 }}
        >
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </Stack>
      </Stack>
    </Container>
  );
}

export default Transactions;
