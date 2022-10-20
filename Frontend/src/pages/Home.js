import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from '@iconify/react';
import windowsFilled from '@iconify/icons-eva/home-outline';
// material
import { Container, Stack, Typography } from '@mui/material';
// components

import { ProductList } from '../components/_dashboard/Home';

import Page from '../components/Page';

/* eslint-disable */

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <Page title="Home | Mobitel Projects Dashboard">
      <Container>
        <Typography variant="h4" color="secondary" sx={{ mb: 2 }}>
          <Icon icon={windowsFilled} width={21} height={21} /> Home
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 2 }}
        />
        <ProductList />
      </Container>
    </Page>
  );
}
