import React, { useContext, useState } from 'react';
import { Grid, Container, Box, Theme, Typography } from '@mui/material';
import InputText from './shared/inputText';
import EthereumCard from './shared/etherumCard';
import styled from '@emotion/styled';
import ContactsIcon from '@mui/icons-material/Contacts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from './shared/button';
import { getEthereumContract } from '../utils/contract';
import { ethers } from 'ethers';
import { TransactionContext } from '../context/transaction';

const Form = styled.form<{ theme?: Theme }>`
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px 10px;
  box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.colors.grey};
  & > div {
    margin-top: 20px;
  }
`;

function Index() {
  const [formData, setFormData] = useState({
    address: '',
    amount: '',
    message: '',
    gift: '',
  });
  const [errors, setErrors] = useState({
    address: '',
    amount: '',
    message: '',
    gift: '',
  });

  const { userAccount } = useContext(TransactionContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ address: '', amount: '', message: '', gift: '' });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { address, amount, gift, message } = formData;
    const { ethereum } = window as any;

    if (
      address.trim() == '' ||
      message.trim() == '' ||
      amount.trim() == '' ||
      gift.trim() == ''
    ) {
      const error = {
        ...errors,
        address: address.trim() == '' ? 'address is required' : '',
        message: message.trim() == '' ? 'message is required' : '',
        amount: amount.trim() == '' ? 'amount is required' : '',
        gift: gift.trim() == '' ? 'gift is required' : '',
      };
      setErrors(error);
    } else {
      const transactionContract = getEthereumContract();
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: userAccount,
            to: address,
            gas: '0x5208',
            amount: ethers.utils.parseEther(amount)._hex,
          },
        ],
      });
      transactionContract.addToBlockchain()
    }

    //console.log(state);
  };
  return (
    <Container sx={{ paddingY: { md: 15, xs: 5 } }}>
      <Grid container width="100%" spacing={1} alignItems="center">
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
          <Form onSubmit={handleSubmit}>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              Send Crypto Now
            </Typography>
            <InputText
              placeholder="Address To"
              Icon={<ContactsIcon />}
              value={formData.address}
              error={errors.address}
              onChange={handleChange}
              name="address"
            />
            <InputText
              placeholder="Amount (ETH)"
              Icon={<AttachMoneyIcon />}
              value={formData.amount}
              type="number"
              error={errors.amount}
              onChange={handleChange}
              name="amount"
            />
            <InputText
              placeholder="Key word (Gif)"
              Icon={<CardGiftcardIcon />}
              value={formData.gift}
              error={errors.gift}
              onChange={handleChange}
              name="gift"
            />
            <InputText
              placeholder="Enter Message"
              Icon={<CreateIcon />}
              value={formData.message}
              error={errors.message}
              onChange={handleChange}
              name="message"
            />
            <Button
              sx={{ width: { xs: '100%' }, marginTop: '10px' }}
              type="submit"
            >
              Send Now
            </Button>
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
