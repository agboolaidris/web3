import React from 'react';
import { Grid, Container, Box, Theme, Typography } from '@mui/material';
import InputText from './shared/inputText';
import EthereumCard from './shared/etherumCard';
import styled from '@emotion/styled';
import ContactsIcon from '@mui/icons-material/Contacts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from './shared/button';
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
          <Form>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              Send Crypto Now
            </Typography>
            <InputText placeholder="Address To" Icon={<ContactsIcon />} />
            <InputText placeholder="Amount (ETH)" Icon={<AttachMoneyIcon />} />
            <InputText
              placeholder="Key word (Gif)"
              Icon={<CardGiftcardIcon />}
            />
            <InputText placeholder="Enter Message" Icon={<CreateIcon />} />
            <Button sx={{ width: { xs: '100%' }, marginTop: '10px' }}>
              Send Now
            </Button>
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
