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
              fontFamily: 'Princess Sofia',
            }}
          >
            Service
          </Typography>
          <Box
            sx={{
              width: '150px',
              height: '2px',
              background: theme.colors.pink,
              marginX: 'auto',
              borderRadius: 5,
            }}
          ></Box>
          <Typography sx={{ marginTop: 1, opacity: '0.7' }}>
            Service That we will continue to improve
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
            content="lorem dggd svsvs ssvv svsvs vsvvs vvsvsb vvvs ibbs"
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
