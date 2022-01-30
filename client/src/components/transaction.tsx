import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Stack, useTheme } from '@mui/material';
import TransactionCard from './shared/TransactionCard';
import { getEthereumContract } from '../utils/contract';

interface dataProp {
  amount: any;
  from: string;
  reciever: string;
  keyword: string;
  timestamp: any;
  message: string;
}
function Transactions() {
  const [data, setData] = useState<dataProp[]>([]);
  useEffect(() => {
    (async () => {
      const { ethereum } = window as any;
      if (!ethereum) {
        return null;
      }
      const transactionContract = getEthereumContract();
      const res: dataProp[] = await transactionContract.getAllTransaction();

      setData(res);
    })();
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
          {data
            .concat()
            .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
            .slice(0, 3)
            .map((tran, i) => {
              console.log(tran.amount._hex);
              return (
                <TransactionCard
                  key={i}
                  from={tran.from}
                  reciever={tran.reciever}
                  amount={parseInt(tran.amount._hex) / 10 ** 18}
                  date={new Date(
                    tran.timestamp.toNumber() * 1000
                  ).toLocaleString()}
                />
              );
            })}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Transactions;
