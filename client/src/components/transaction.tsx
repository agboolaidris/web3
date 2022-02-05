import React, { useEffect, useState, useContext } from 'react';
import { Container, Typography, Box, Stack, useTheme } from '@mui/material';
import TransactionCard from './shared/TransactionCard';
import { getEthereumContract } from '../utils/contract';
import { TransactionContext } from '../context/transaction';
import { HashLoader } from 'react-spinners';
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
  const { userAccount } = useContext(TransactionContext);
  const [loading, setloading] = useState(false);
  const [metaMaskInstall, setMetaMaskInstall] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    (async () => {
      const { ethereum } = window as any;
      if (!ethereum) {
        setMetaMaskInstall(false);
      } else {
        if (userAccount.length > 0) {
          setloading(true);
          const transactionContract = getEthereumContract();
          const res: dataProp[] = await transactionContract.getAllTransaction();
          setData(res);
          setloading(false);
        }
      }
    })();
  }, [userAccount]);

  return (
    <Container sx={{ paddingY: { xs: '40px', md: '70px' } }}>
      {loading ? (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ height: '200px' }}
        >
          <HashLoader color={theme.colors.pink} />
        </Stack>
      ) : (
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
              {metaMaskInstall
                ? 'latest transactions'
                : 'install Metamask to see the latest transactions'}
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
      )}
    </Container>
  );
}

export default Transactions;
