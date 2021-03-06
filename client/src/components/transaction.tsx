import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
  Box,
  Stack,
  useTheme,
  Grid,
} from '@mui/material';
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
    <Container sx={{ paddingY: { xs: '40px', md: '70px' } }} id="transactions">
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
          direction={{ xs: 'column' }}
          alignItems="center"
          justifyContent="center"
          spacing={2}
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
              }}
            >
              Transaction
            </Typography>

            <Typography
              sx={{
                opacity: '0.7',
              }}
            >
              {metaMaskInstall
                ? 'latest transactions'
                : 'install Metamask to see the latest transactions'}
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            {data
              .concat()
              .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
              .slice(0, 7)
              .map((tran, i) => {
                return (
                  <Grid item key={i} xs={12} sm={6} lg={4}>
                    <TransactionCard
                      from={tran.from}
                      reciever={tran.reciever}
                      amount={parseInt(tran.amount._hex) / 10 ** 18}
                      date={new Date(
                        tran.timestamp.toNumber() * 1000
                      ).toLocaleString()}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Stack>
      )}
    </Container>
  );
}

export default Transactions;
