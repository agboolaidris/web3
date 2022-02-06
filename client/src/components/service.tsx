import React from 'react';
import styled from '@emotion/styled';
import {
  alpha,
  Container,
  Theme,
  Typography,
  Box,
  Stack,
  useTheme,
} from '@mui/material';
import ServiceCard from './shared/serviceCard';
import SecurityUpdateGoodRoundedIcon from '@mui/icons-material/SecurityUpdateGoodRounded';

const Wrapper = styled.div<{ theme?: Theme }>`
  background: ${({ theme }) => alpha(theme.colors.grey, 0.1)};
`;
function Service() {
  const theme = useTheme();
  return (
    <Wrapper>
      <Container sx={{ paddingY: { xs: '40px', md: '70px' } }}>
        <Box
          sx={{ width: 'fixed-content', marginX: 'auto', textAlign: 'center' }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              //fontFamily: 'Princess Sofia',
            }}
          >
            The most trusted cryptocurrency platform
          </Typography>

          <Typography sx={{ marginTop: 1, opacity: '0.7' }}>
            Here are a few reasons why you should choose Easycoin
          </Typography>
        </Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 5 }}
        >
          <ServiceCard
            title="Security"
            content="Security is guaranted. We always maintain privacy and mainting the quality of our products."
            icon={
              <SecurityUpdateGoodRoundedIcon
                sx={{ color: theme.colors.background }}
              />
            }
          />
          <ServiceCard
            title="Fastest transactions"
            content="Users can easily buy Bitcoin and other cryptocurrencies using a wide range of payment options, including bank transfer, credit or debit card, and cash. There’s a payment option for everyone on Easycoin."
            icon={
              <SecurityUpdateGoodRoundedIcon
                sx={{ color: theme.colors.background }}
              />
            }
          />
          <ServiceCard
            title="Best exchange rates"
            content="Security is guaranted. We always maintain privacy and mainting the quality of our products."
            icon={
              <SecurityUpdateGoodRoundedIcon
                sx={{ color: theme.colors.background }}
              />
            }
          />
        </Stack>
      </Container>
    </Wrapper>
  );
}

export default Service;
