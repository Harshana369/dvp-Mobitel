import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from '@iconify/react';
import windowsFilled from '@iconify/icons-eva/home-outline';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import {
  fetchMobitelData,
  fetchMobitelProjectNames,
  fetchMobitelColumnGraphData,
  fetchMobitelAreaGraphData,
  fetchMobitelScopeData,
  fetchMobitelLastUpdatesData
} from '../Redux/Action/mobitelAction';

import { ProductList } from '../components/_dashboard/Home';

import Page from '../components/Page';
import {
  fetchHuaweiAreaGraphData,
  fetchHuaweiColumnGraphData,
  fetchHuaweiData,
  fetchHuaweiProjectNames,
  fetchHuaweiProjectsLastUpdates,
  fetchHuaweiScopeData
} from '../Redux/Action/huaweiAction';
import {
  fetchZTEAreaGraphData,
  fetchZTEColumnGraphData,
  fetchZTEData,
  fetchZTEProjectNames,
  fetchZTEProjectsLastUpdates,
  fetchZTEScopeData
} from '../Redux/Action/zteAction';
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
