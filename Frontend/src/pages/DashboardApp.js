import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import colorLib from '@kurkle/color';

// material
import {
  Grid,
  Container,
  Typography,
  Stack,
  Card,
  Button,
  rgbToHex,
  CardHeader
} from '@mui/material';

//
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

// components
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {
  fetchMobitelAreaGraphData,
  fetchMobitelColumnGraphData,
  fetchMobitelData,
  fetchMobitelLastUpdatesData,
  fetchMobitelProjectNames,
  fetchMobitelScopeData
} from '../Redux/Action/mobitelAction';

import Page from '../components/Page';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  LastUpdatesMobitel,
  LastUpdatesVendor,
  AppWeeklySales,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWebsiteVisits1
} from '../components/_dashboard/app';
import AppBugReports1 from '../components/_dashboard/app/AppBugReports1';
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

export default function DashboardApp() {
  const [MobitelDropdownValue, setMobitelDropdownValue] = useState('All Mobitel Projects');
  const [VendorHuaweiDropdownValue, setVendorHuaweiDropdownValue] = useState('All Huawei Projects');
  const [VendorZTEDropdownValue, setVendorZTEDropdownValue] = useState('All ZTE Projects');

  const [VendorUpdatesIsShown, setVendorUpdatesIsShown] = useState(false);
  const [MobitelUpdatesIsShown, setMobitelUpdatesIsShown] = useState(true);
  //---------------------------

  const mobitelDatabseDetails = useSelector((state) => state.mobitelDatabse);
  const { mobitelDatabseLoading, mobitelDatabaseData } = mobitelDatabseDetails;

  const mobitelOverviewDetails = useSelector((state) => state.mobitelOverview);
  const { mobitelOverviewLoading, mobitelOverviewData } = mobitelOverviewDetails;

  const mobitelColumnDetails = useSelector((state) => state.mobitelChartColumn);
  const { mobitelChartColumnLoading, mobitelChartColumData } = mobitelColumnDetails;

  const mobitelAreaDetails = useSelector((state) => state.mobitelChartArea);
  const { mobitelChartAreaLoading, mobitelChartAreaData } = mobitelAreaDetails;

  const mobitelScopDetails = useSelector((state) => state.mobitelScope);
  const { mobitelScopeLoading, mobitelScopeData } = mobitelScopDetails;

  const mobitelLastUpdateDetails = useSelector((state) => state.mobitelLastUpdate);
  const { mobitelLastUpdateLoading, mobitelLastUpdateData } = mobitelLastUpdateDetails;

  //------------------------

  const huaweiDatabseDetails = useSelector((state) => state.huaweiDatabase);
  const { huaweiDatabaseLoading, huaweiDatabaseData } = huaweiDatabseDetails;

  const huaweiFiltedNameDetails = useSelector((state) => state.huaweiFiltedName);
  const { huaweiFiltedNameLoading, huaweiFiltedNameData } = huaweiFiltedNameDetails;

  const huaweiColumChartDetails = useSelector((state) => state.huaweiColumChart);
  const { huaweiColumChartLoading, huaweiColumChartData } = huaweiColumChartDetails;

  const huaweiAreaChartDetails = useSelector((state) => state.huaweiAreaChart);
  const { huaweiAreaChartLoading, huaweiAreaChartData } = huaweiAreaChartDetails;

  const huaweiScopeDetails = useSelector((state) => state.huaweiScope);
  const { huaweiScopeLoading, huaweiScopeData } = huaweiScopeDetails;

  const huaweiLastUpdateDetails = useSelector((state) => state.huaweiLastUpdate);
  const { huaweiLastUpdateLoading, huaweiLastUpdateData } = huaweiLastUpdateDetails;

  //--------------------------

  const zteDatabseDetails = useSelector((state) => state.zteDatabase);
  const { zteDatabaseLoading, zteDatabaseData } = zteDatabseDetails;

  const zteFiltedNameDetails = useSelector((state) => state.zteFiltedName);
  const { zteFiltedNameLoading, zteFiltedNameData } = zteFiltedNameDetails;

  const zteColumChartDetails = useSelector((state) => state.zteColumChart);
  const { zteColumChartLoading, zteColumChartData } = zteColumChartDetails;

  const zteAreaChartDetails = useSelector((state) => state.zteAreaChart);
  const { zteAreaChartLoading, zteAreaChartData } = zteAreaChartDetails;

  const zteScopeDetails = useSelector((state) => state.zteScope);
  const { zteScopeLoading, zteScopeData } = zteScopeDetails;

  const zteLastUpdateDetails = useSelector((state) => state.zteLastUpdate);
  const { zteLastUpdateLoading, error, zteLastUpdateData } = zteLastUpdateDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMobitelData(MobitelDropdownValue));
    dispatch(fetchMobitelProjectNames());
    dispatch(fetchMobitelColumnGraphData(MobitelDropdownValue));
    dispatch(fetchMobitelAreaGraphData(MobitelDropdownValue));
    dispatch(fetchMobitelScopeData(MobitelDropdownValue));
    dispatch(fetchMobitelLastUpdatesData(MobitelDropdownValue));
    //--------------------
    dispatch(fetchHuaweiData(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiProjectNames(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiColumnGraphData(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiAreaGraphData(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiScopeData(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiProjectsLastUpdates(VendorHuaweiDropdownValue));
    //----------------------
    dispatch(fetchZTEData(VendorZTEDropdownValue));
    dispatch(fetchZTEProjectNames(VendorZTEDropdownValue));
    dispatch(fetchZTEColumnGraphData(VendorZTEDropdownValue));
    dispatch(fetchZTEAreaGraphData(VendorZTEDropdownValue));
    dispatch(fetchZTEScopeData(VendorZTEDropdownValue));
    dispatch(fetchZTEProjectsLastUpdates(VendorZTEDropdownValue));
  }, [dispatch]);

  // const MobitelprojectNames = mobitelOverviewData.mobitelProjectsNamesArrayForInsights.concat({
  //   value: '',
  //   label: 'Vendor Projects Only'
  // });

  // const VendorprojectNames = huaweiFiltedNameData.filteredProjectNamesArray.concat({
  //   value: '',
  //   label: 'Mobitel Projects Only'
  // });

  // const VendorprojectsZTENames = zteFiltedNameData.filteredZTEProjectNamesArray.concat({
  //   value: '',
  //   label: 'Mobitel Projects Only'
  // });

  const handleMobitelDropdownValue = (event) => {
    setMobitelDropdownValue(event.target.value);
  };

  const handleHuaweiVendorDropdownValue = (event) => {
    setVendorHuaweiDropdownValue(event.target.value);
  };

  const handleZTEVendorDropdownValue = (event) => {
    setVendorZTEDropdownValue(event.target.value);
  };

  const showVendorProjectsUpdates = () => {
    setVendorUpdatesIsShown(true);
    setMobitelUpdatesIsShown(false);
  };

  const showMobitelProjectsUpdates = () => {
    setVendorUpdatesIsShown(false);
    setMobitelUpdatesIsShown(true);
  };

  const ScopeDataVendor =
    huaweiScopeData.scopeDataToTheFrontEnd + zteScopeData.scopeDataToTheFrontEnd;
  const HandoverDataVendor =
    parseInt(huaweiDatabaseData.HandOverDataToSquares, 10) +
    parseInt(zteDatabaseData.HandOverDataToSquares, 10);
  const PATPassDataVendor =
    parseInt(huaweiDatabaseData.PatDataForFrontEnd, 10) +
    parseInt(zteDatabaseData.PatDataForFrontEnd, 10);
  const OnAirDataVendor =
    huaweiDatabaseData.OnAirDataForFrontEnd + zteDatabaseData.OnAirDataForFrontEnd;
  const HoldSitesDataVendor =
    huaweiDatabaseData.HoldSitesDataforSquares + zteDatabaseData.HoldSitesDataforSquares;

  const ScopeData = mobitelScopeData.scopeDataToTheFrontEnd + ScopeDataVendor;
  const HandoverData =
    parseInt(mobitelDatabaseData.HandOverDataToSquares, 10) + parseInt(HandoverDataVendor, 10);
  const PATPassData =
    parseInt(mobitelDatabaseData.PatDataForFrontEnd, 10) + parseInt(PATPassDataVendor, 10);
  const OnAirData = mobitelDatabaseData.OnAirDataForFrontEnd + OnAirDataVendor;
  const HoldSitesData = mobitelDatabaseData.HoldSitesDataforSquares + HoldSitesDataVendor;

  // ----------------- Sum of two vendors Chart Data For Column Graph --------------------

  const AllvendorOnAir = 0;
  const AllvendorPAT = 0;
  const AllvendorSAR = 0;
  const AllvendorCom = 0;
  const AllvendorIns = 0;
  const AllvendorMob = 0;

  if (huaweiColumChartLoading || zteColumChartLoading) {
  } else {
    const onAirHuawei = 0;
    const onAirZTE = 0;
    onAirHuawei = huaweiColumChartData.chartDataForFrontEnd[0];
    onAirZTE = zteColumChartData.chartDataForFrontEnd[0];
    AllvendorOnAir = onAirHuawei.map((a, i) => a + onAirZTE[i]);
    // ----------------------------------------------
    const PATHuawei = huaweiColumChartData.chartDataForFrontEnd[1];
    const PATZTE = zteColumChartData.chartDataForFrontEnd[1];
    AllvendorPAT = PATHuawei.map((a, i) => a + PATZTE[i]);
    // --------------------------------------------
    const SARHuawei = huaweiColumChartData.chartDataForFrontEnd[2];
    const SARZTE = zteColumChartData.chartDataForFrontEnd[2];
    AllvendorSAR = SARHuawei.map((a, i) => a + SARZTE[i]);
    // --------------------------------------------
    const ComHuawei = huaweiColumChartData.chartDataForFrontEnd[3];
    const ComZTE = zteColumChartData.chartDataForFrontEnd[3];
    AllvendorCom = ComHuawei.map((a, i) => a + ComZTE[i]);
    // --------------------------------------------
    const InsHuawei = huaweiColumChartData.chartDataForFrontEnd[4];
    const InsZTE = zteColumChartData.chartDataForFrontEnd[4];
    AllvendorIns = InsHuawei.map((a, i) => a + InsZTE[i]);
    // --------------------------------------------
    const MobHuawei = huaweiColumChartData.chartDataForFrontEnd[5];
    const MobZTE = zteColumChartData.chartDataForFrontEnd[5];
    AllvendorMob = MobHuawei.map((a, i) => a + MobZTE[i]);
    // ----------------------------------------------
  }

  const ChartDataForColumnGraphVendor = [
    AllvendorOnAir,
    AllvendorPAT,
    AllvendorSAR,
    AllvendorCom,
    AllvendorIns,
    AllvendorMob
  ];

  // ----------------- ChartDataForColumnGraph ---------------------------------------------
  const onAir = 0;
  const PAT = 0;
  const SAR = 0;
  const Com = 0;
  const Ins = 0;
  const Mob = 0;

  if (huaweiColumChartLoading || zteColumChartLoading || mobitelChartColumnLoading) {
    const onAir1 = mobitelChartColumData.chartDataForFrontEnd[0];
    const onAir2 = ChartDataForColumnGraphVendor[0];
    onAir = onAir1.map((a, i) => a + onAir2[i]);
    // ----------------------------------------------
    const PAT1 = mobitelChartColumData.chartDataForFrontEnd[1];
    const PAT2 = ChartDataForColumnGraphVendor[1];
    PAT = PAT1.map((a, i) => a + PAT2[i]);
    // --------------------------------------------
    const SAR1 = mobitelChartColumData.chartDataForFrontEnd[2];
    const SAR2 = ChartDataForColumnGraphVendor[2];
    SAR = SAR1.map((a, i) => a + SAR2[i]);
    // --------------------------------------------
    const Com1 = mobitelChartColumData.chartDataForFrontEnd[3];
    const Com2 = ChartDataForColumnGraphVendor[3];
    Com = Com1.map((a, i) => a + Com2[i]);
    // --------------------------------------------
    const Ins1 = mobitelChartColumData.chartDataForFrontEnd[4];
    const Ins2 = ChartDataForColumnGraphVendor[4];
    Ins = Ins1.map((a, i) => a + Ins2[i]);
    // --------------------------------------------
    const Mob1 = mobitelChartColumData.chartDataForFrontEnd[5];
    const Mob2 = ChartDataForColumnGraphVendor[5];
    Mob = Mob1.map((a, i) => a + Mob2[i]);
    // ----------------------------------------------
  }

  const columnChartData = [];
  columnChartData.push(
    { name: 'On Air', type: 'column', data: onAir },
    { name: 'PAT', type: 'column', data: PAT },
    { name: 'SAR', type: 'column', data: SAR },
    { name: 'Commisioned', type: 'column', data: Com },
    { name: 'Installed', type: 'column', data: Ins },
    { name: 'Mobilized', type: 'column', data: Mob }
  );

  // -------------------ColumChart End----------------------------

  // ----------------- Sum of two vendors Chart Data For Area Graph --------------------

  const Allvendor_Site_Ho = [];
  const Allvendor_On_Air = [];
  const Allvendor_PTA_Pass = [];
  const Allvendor_SAR = [];
  const Allvendor_Commisioned = [];
  const Allvendor_Installed = [];
  const Allvendor_Mobilized = [];

  if (huaweiAreaChartLoading || zteAreaChartLoading) {
    const Site_Ho_Huawei = huaweiAreaChartData.chartDataForFrontEnd[0];
    const Site_HO_ZTE = zteAreaChartData.chartDataForFrontEnd[0];
    Allvendor_Site_Ho = Site_Ho_Huawei.map((a, i) => a + Site_HO_ZTE[i]);
    //--------------------------------------------------
    const On_Air_Huawei = huaweiAreaChartData.chartDataForFrontEnd[1];
    const On_Air_ZTE = zteAreaChartData.chartDataForFrontEnd[1];
    Allvendor_On_Air = On_Air_Huawei.map((a, i) => a + On_Air_ZTE[i]);
    //---------------------------------------------------
    const PTA_Pass_Huawei = huaweiAreaChartData.chartDataForFrontEnd[2];
    const PTA_Pass_ZTE = zteAreaChartData.chartDataForFrontEnd[2];
    Allvendor_PTA_Pass = PTA_Pass_Huawei.map((a, i) => a + PTA_Pass_ZTE[i]);
    //---------------------------------------------------
    const SAR_Huawei = huaweiAreaChartData.chartDataForFrontEnd[3];
    const SAR_ZTE = zteAreaChartData.chartDataForFrontEnd[3];
    Allvendor_SAR = SAR_Huawei.map((a, i) => a + SAR_ZTE[i]);
    //---------------------------------------------------
    const Commisioned_Huawei = huaweiAreaChartData.chartDataForFrontEnd[4];
    const Commisioned_ZTE = zteAreaChartData.chartDataForFrontEnd[4];
    Allvendor_Commisioned = Commisioned_Huawei.map((a, i) => a + Commisioned_ZTE[i]);
    //---------------------------------------------------
    const Installed_Huawei = huaweiAreaChartData.chartDataForFrontEnd[5];
    const Installed_ZTE = zteAreaChartData.chartDataForFrontEnd[5];
    Allvendor_Installed = Installed_Huawei.map((a, i) => a + Installed_ZTE[i]);
    //--------------------------------------------------
    const Mobilized_Huawei = huaweiAreaChartData.chartDataForFrontEnd[6];
    const Mobilized_ZTE = zteAreaChartData.chartDataForFrontEnd[6];
    Allvendor_Mobilized = Mobilized_Huawei.map((a, i) => a + Mobilized_ZTE[i]);
    //-----------------------------------------------
  }

  // ----------------- ChartDataForAreaGraph ---------------------------------------------

  const ChartDataForAreaGraphVendor = [
    Allvendor_On_Air,
    Allvendor_PTA_Pass,
    Allvendor_SAR,
    Allvendor_Commisioned,
    Allvendor_Installed,
    Allvendor_Mobilized,
    Allvendor_Site_Ho
  ];

  //-----------------------------------------------------------------------------------

  const A_Ho = 0;
  const A_On_Air = 0;
  const A_PAT_Pass = 0;
  const A_SAR = 0;
  const A_Commisioned = 0;
  const A_Installed = 0;
  const A_Mobilized = 0;

  if (huaweiAreaChartLoading || zteAreaChartLoading || mobitelChartAreaLoading) {
    const A_Ho_1 = mobitelChartAreaData.chartDataForFrontEnd[0];
    const A_Ho_2 = ChartDataForAreaGraphVendor[0];
    A_Ho = A_Ho_1.map((a, i) => a + A_Ho_2[i]);

    // --------------------------------------------
    const A_On_Air1 = mobitelChartAreaData.chartDataForFrontEnd[1];
    const A_On_Air2 = ChartDataForAreaGraphVendor[1];
    A_On_Air = A_On_Air1.map((a, i) => a + A_On_Air2[i]);

    //---------------------------------------------
    const A_PAT_Pass1 = mobitelChartAreaData.chartDataForFrontEnd[2];
    const A_PAT_Pass2 = ChartDataForAreaGraphVendor[2];
    A_PAT_Pass = A_PAT_Pass1.map((a, i) => a + A_PAT_Pass2[i]);
    //--------------------------------------------

    const A_SAR_1 = mobitelChartAreaData.chartDataForFrontEnd[3];
    const A_SAR_2 = ChartDataForAreaGraphVendor[3];
    A_SAR = A_SAR_1.map((a, i) => a + A_SAR_2[i]);
    //--------------------------------------------

    const A_Commisioned_1 = mobitelChartAreaData.chartDataForFrontEnd[4];
    const A_Commisioned_2 = ChartDataForAreaGraphVendor[4];
    A_Commisioned = A_Commisioned_1.map((a, i) => a + A_Commisioned_2[i]);
    //---------------------------------------------

    const A_Installed_1 = mobitelChartAreaData.chartDataForFrontEnd[5];
    const A_Installed_2 = ChartDataForAreaGraphVendor[5];
    A_Installed = A_Installed_1.map((a, i) => a + A_Installed_2[i]);
    //---------------------------------------------

    const A_Mobilized_1 = mobitelChartAreaData.chartDataForFrontEnd[6];
    const A_Mobilized_2 = ChartDataForAreaGraphVendor[6];
    A_Mobilized = A_Mobilized_1.map((a, i) => a + A_Mobilized_2[i]);
    //---------------------------------------------
  }

  const areaChartData = [];

  areaChartData.push(
    { name: 'On Air', type: 'area', data: A_On_Air },
    { name: 'PAT', type: 'area', data: A_PAT_Pass },
    { name: 'SAR', type: 'area', data: A_SAR },
    { name: 'Commisioned', type: 'area', data: A_Commisioned },
    { name: 'Installed', type: 'area', data: A_Installed },
    { name: 'Mobilized', type: 'area', data: A_Mobilized },
    { name: 'Ho', type: 'area', data: A_Ho }
  );

  function transparentize(value, opacity) {
    const alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return colorLib(value).alpha(alpha).rgbString();
  }

  const areachat_chart_one = {
    dataLine: {
      labels: mobitelChartAreaData.XaxisDataForTheGraphs,
      datasets: [
        {
          label: areaChartData[0].name,
          fill: true,
          backgroundColor: transparentize('rgb(80, 143, 31)'),
          borderColor: 'rgb(80, 143, 31)',
          pointHoverBackgroundColor: 'rgb(0,0,0)',
          pointHoverRadius: 12,
          data: areaChartData[0].data
        },
        {
          label: areaChartData[1].name,
          fill: true,
          backgroundColor: transparentize('rgb(255, 231, 0)'),
          borderColor: 'rgb(255, 231, 0)',
          pointHoverBackgroundColor: 'rgb(0,0,0)',
          pointHoverRadius: 12,
          data: areaChartData[1].data
        },
        {
          label: areaChartData[2].name,
          fill: true,
          backgroundColor: transparentize('rgb(45, 153, 255)'),
          borderColor: 'rgb(45, 153, 255)',
          pointHoverBackgroundColor: 'rgb(0,0,0)',
          pointHoverRadius: 12,
          data: areaChartData[2].data
        },
        {
          label: areaChartData[3].name,
          fill: true,
          backgroundColor: transparentize('rgb(130, 106, 249)'),
          borderColor: 'rgb(130, 106, 249)',
          pointHoverBackgroundColor: 'rgb(0,0,0)',
          pointHoverRadius: 12,
          data: areaChartData[3].data
        },
        {
          label: areaChartData[4].name,
          fill: true,
          backgroundColor: transparentize('rgb(44, 217, 197)'),
          borderColor: 'rgb(44, 217, 197)',
          pointHoverBackgroundColor: 'rgb(0,0,0)',
          pointHoverRadius: 12,
          data: areaChartData[4].data
        },
        {
          label: areaChartData[5].name,
          fill: true,
          backgroundColor: transparentize('rgb(255, 108, 64)'),
          borderColor: 'rgb(255, 108, 64)',
          pointHoverBackgroundColor: 'rgb(0,0,0)',
          pointHoverRadius: 12,
          data: areaChartData[5].data
        },
        {
          label: areaChartData[6].name,
          fill: true,
          backgroundColor: transparentize('rgb(91, 229, 132)'),
          borderColor: 'rgb(91, 229, 132)',
          pointHoverBackgroundColor: 'rgb(0,0,0)',
          pointHoverRadius: 12,
          data: areaChartData[6].data
        }
      ]
    }
  };

  return (
    <>
      {mobitelDatabseLoading ||
      mobitelOverviewLoading ||
      mobitelChartColumnLoading ||
      mobitelChartAreaLoading ||
      mobitelScopeLoading ||
      mobitelLastUpdateLoading ||
      huaweiDatabaseLoading ||
      huaweiFiltedNameLoading ||
      huaweiColumChartLoading ||
      huaweiAreaChartLoading ||
      huaweiScopeLoading ||
      huaweiLastUpdateLoading ||
      zteDatabaseLoading ||
      zteFiltedNameLoading ||
      zteColumChartLoading ||
      zteAreaChartLoading ||
      zteScopeLoading ||
      zteLastUpdateLoading ? (
        <h1>Loding....</h1>
      ) : error ? (
        <h1>error...</h1>
      ) : (
        <Page title="Dashboard | Mobitel Projects Dashboard">
          <Container maxWidth="xl">
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" gutterBottom>
                All Projects Overview
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="caption1">Select Options</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
                mb={0}
              >
                <TextField
                  style={{ float: 'right' }}
                  sx={{ width: 200 }}
                  size="small"
                  id="outlined-select-currency"
                  select
                  value={MobitelDropdownValue}
                  onChange={handleMobitelDropdownValue}
                >
                  {/* {MobitelprojectNames.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))} */}
                </TextField>
                <TextField
                  style={{ float: 'right' }}
                  sx={{ width: 200 }}
                  size="small"
                  id="outlined-select-currency"
                  select
                  value={VendorHuaweiDropdownValue}
                  onChange={handleHuaweiVendorDropdownValue}
                >
                  {/* {VendorprojectNames.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))} */}
                </TextField>
                <TextField
                  style={{ float: 'right' }}
                  sx={{ width: 200 }}
                  size="small"
                  id="outlined-select-currency"
                  select
                  value={VendorZTEDropdownValue}
                  onChange={handleZTEVendorDropdownValue}
                >
                  {/* {VendorprojectsZTENames.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))} */}
                </TextField>
              </Stack>
            </Stack>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={2.4}>
                <AppWeeklySales scopeData={ScopeData} />
              </Grid>
              <Grid item xs={12} sm={6} md={2.4}>
                <AppBugReports1 handoverData={HandoverData} />
              </Grid>
              <Grid item xs={12} sm={6} md={2.4}>
                <AppItemOrders patData={PATPassData} />
              </Grid>
              <Grid item xs={12} sm={6} md={2.4}>
                <AppNewUsers onAirData={OnAirData} />
              </Grid>
              <Grid item xs={12} sm={6} md={2.4}>
                <AppBugReports holdData={HoldSitesData} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <MDBContainer style={{ backgroundColor: 'rgb(4, 20, 38)', borderRadius: '15px' }}>
                  <CardHeader title="All Sites Completed" subheader="Cumilative progress" />

                  <Line data={areachat_chart_one.dataLine} />
                </MDBContainer>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <AppWebsiteVisits
                  chartData={areaChartData}
                  xaxisData={mobitelChartAreaData.XaxisDataForTheGraphs}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                <AppWebsiteVisits
                  chartData={columnChartData}
                  xaxisData={mobitelChartColumData.XaxisDataForTheGraphs}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <AppCurrentVisits />
              </Grid>

              <Grid item xs={12} md={6} lg={12} mb={0}>
                {/* <AppWebsiteVisits1
                  weeklyProgressDataHuawei={huaweiDatabaseData.weeklyProgressDataForFrontEnd}
                  weeklyProgressDataZTE={zteDatabaseData.weeklyProgressDataForFrontEnd}
                  completedSitesHuawei={huaweiDatabaseData.WeeklyProgressOnAirSitesData}
                  completedSitesZTE={zteDatabaseData.WeeklyProgressOnAirSitesData}
                /> */}
              </Grid>
              <Grid item xs={12} md={6} lg={12} mb={0}>
                <Card style={{ height: '520px' }}>
                  <Stack sx={{ p: 2 }} direction="row">
                    <Button
                      color="secondary"
                      onClick={() => {
                        showMobitelProjectsUpdates();
                        fetchMobitelLastUpdatesData();
                        fetchHuaweiProjectsLastUpdates();
                        fetchZTEProjectsLastUpdates();
                      }}
                    >
                      Mobitel projects
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => {
                        showVendorProjectsUpdates();
                        fetchMobitelLastUpdatesData();
                        fetchHuaweiProjectsLastUpdates();
                        fetchZTEProjectsLastUpdates();
                      }}
                    >
                      Vendor projects
                    </Button>
                  </Stack>
                  {/* {MobitelUpdatesIsShown && (
                    <LastUpdatesMobitel mobitelLastUpdates={mobitelLastUpdateData.existingPosts} />
                  )}
                  {VendorUpdatesIsShown && (
                    <LastUpdatesVendor
                      huaweiLastUpdates={huaweiLastUpdateData.existingPosts}
                      zteLastUpdates={zteLastUpdateData.existingPosts}
                    />
                  )} */}
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Page>
      )}
    </>
  );
}
