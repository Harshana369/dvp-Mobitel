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
  const All_Mobitel_Projects = 'All Mobitel Projects';
  const All_Huawei_Projects = 'All Huawei Projects';
  const All_ZTE_Projects = 'All ZTE Projects';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMobitelData(All_Mobitel_Projects));
    dispatch(fetchMobitelProjectNames());
    dispatch(fetchMobitelColumnGraphData(All_Mobitel_Projects));
    dispatch(fetchMobitelAreaGraphData(All_Mobitel_Projects));
    dispatch(fetchMobitelScopeData(All_Mobitel_Projects));
    dispatch(fetchMobitelLastUpdatesData(All_Mobitel_Projects));
    //--------------------

    dispatch(fetchHuaweiData(All_Huawei_Projects));
    dispatch(fetchHuaweiProjectNames(All_Huawei_Projects));
    dispatch(fetchHuaweiColumnGraphData(All_Huawei_Projects));
    dispatch(fetchHuaweiAreaGraphData(All_Huawei_Projects));
    dispatch(fetchHuaweiScopeData(All_Huawei_Projects));
    dispatch(fetchHuaweiProjectsLastUpdates(All_Huawei_Projects));

    //----------------------

    dispatch(fetchZTEData(All_ZTE_Projects));
    dispatch(fetchZTEProjectNames(All_ZTE_Projects));
    dispatch(fetchZTEColumnGraphData(All_ZTE_Projects));
    dispatch(fetchZTEAreaGraphData(All_ZTE_Projects));
    dispatch(fetchZTEScopeData(All_ZTE_Projects));
    dispatch(fetchZTEProjectsLastUpdates(All_ZTE_Projects));
  }, [dispatch]);

  const zteLastUpdateDetails = useSelector((state) => state.zteLastUpdate);
  const { loading, error, zteLastUpdateData } = zteLastUpdateDetails;
  return (
    <>
      {loading ? (
        <h1>Loding....</h1>
      ) : error ? (
        <h1>error...</h1>
      ) : (
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
      )}
    </>
  );
}
