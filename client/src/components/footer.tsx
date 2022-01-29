import React, { useState } from 'react';
import styled from '@emotion/styled';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SendIcon from '@mui/icons-material/Send';

import {
  Container,
  Theme,
  Stack,
  Box,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import InputText from './shared/inputText';
const Wrap = styled.div<{ theme?: Theme }>`
  width: 100%;
  padding: 50px 0;
  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.palette.common.white};
`;
const Link = styled(Typography)<{ theme?: Theme }>`
  margin-top: 7px;
  color: ${({ theme }) => alpha(theme.colors.background, 0.5)};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
const AddressWrap = styled.div<{ theme?: Theme }>`
  width: 100%;
  max-width: 300px;
  min-height: 250px;
  background: ${({ theme }) => alpha(theme.colors.background, 0.2)};
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  p {
    margin: 0;
    &:last-of-type {
      color: ${({ theme }) => theme.colors.pink};
      font-weight: bolder;
    }
  }

  .iconWrapper {
    background: ${({ theme }) => theme.colors.pink};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.pink};
    }
  }
`;
function Footer() {
  const theme = useTheme();
  const [formData, setFormData] = useState('');
  return (
    <Wrap>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          flexWrap="nowrap"
          spacing={{ xs: 4, md: 2 }}
        >
          <Box sx={{ maxWidth: '400px', width: '100%' }}>
            <Typography variant="h4" sx={{ fontFamily: 'Princess Sofia' }}>
              EasyCoin
            </Typography>
            <Typography sx={{ color: alpha(theme.colors.background, 0.5) }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate suscipit aspernatur totam voluptatem harum voluptatibus
              maiores.
            </Typography>
            <Box sx={{ marginTop: 3, maxWidth: '400px', width: '100%' }}>
              <Typography variant="h6">Subscribe</Typography>
              <InputText
                rightIcon={<SendIcon />}
                leftIcon={<AlternateEmailIcon />}
                bgColor={theme.colors.background}
                placeholder="Enter your email address"
                onChange={(e) => setFormData(e.target.value)}
                value={formData}
                name="email"
              />
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  color: theme.colors.pink,
                  marginTop: '3px',
                }}
              >
                Get CrytoCurrency update on your Mailbox
              </Typography>
            </Box>
          </Box>
          <Box sx={{ maxWidth: '300px', width: '100%' }}>
            <Typography variant="h6">Company</Typography>
            <Stack direction="column" sx={{ marginTop: { md: 3, xs: 1 } }}>
              <Link>About Us</Link>
              <Link>Careers</Link>
              <Link>Our Services</Link>
              <Link>Contact Us</Link>
            </Stack>
          </Box>
          <AddressWrap>
            <p>+2348137088555</p>
            <p>support@easycoin.com</p>
            <Typography
              component="span"
              sx={{ marginTop: 1, color: alpha(theme.colors.background, 0.5) }}
            >
              22 Obaina street,
              <br />
              Yayanu Square, Lagos,
              <br />
              Nigeria.
            </Typography>
            <Stack direction="row" sx={{ marginTop: 1 }} spacing={1}>
              <div className="iconWrapper">
                <TwitterIcon />
              </div>

              <div className="iconWrapper">
                <FacebookRoundedIcon />
              </div>

              <div className="iconWrapper">
                <LinkedInIcon />
              </div>
            </Stack>
          </AddressWrap>
        </Stack>
      </Container>
    </Wrap>
  );
}

export default Footer;
