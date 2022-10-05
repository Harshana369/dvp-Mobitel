import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

export default function DashboardApp() {
  const navigate = useNavigate();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const [MobitelprojectNamesArray, setMobitelprojectNamesArray] = useState([]);
  const [VendorprojectsHuaweiNamesArray, setVendorprojectsHuaweiNamesArray] = useState([]);
  const [VendorprojectsZTENamesArray, setVendorprojectsZTENamesArray] = useState([]);

  const [MobitelDropdownValue, setMobitelDropdownValue] = useState('All Mobitel Projects');
  const [VendorHuaweiDropdownValue, setVendorHuaweiDropdownValue] = useState('All Huawei Projects');
  const [VendorZTEDropdownValue, setVendorZTEDropdownValue] = useState('All ZTE Projects');

  const [ChartDataForColumnGraphMobitel, setChartDatForColumnGraphMobitel] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const [ChartDataForAreaGraphMobitel, setChartDatForAreaGraphMobitel] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const [ChartDataForColumnGraphHuawei, setChartDatForColumnGraphHuawei] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const [ChartDataForAreaGraphHuawei, setChartDatForAreaGraphHuawei] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const [ChartDataForColumnGraphZTE, setChartDatForColumnGraphZTE] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const [ChartDataForAreaGraphZTE, setChartDatForAreaGraphZTE] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const [ScopeDataMobitel, setScopeDataMobitel] = useState([]);
  const [HandoverDataMobitel, setHandoverDataMobitel] = useState([]);
  const [PATPassDataMobitel, sePATPassDataMobitel] = useState();
  const [OnAirDataMobitel, setOnAirDataMobitel] = useState();
  const [HoldSitesDataMobitel, setHoldSitesDataMobitel] = useState();
  const [XaxisDataMobitel, setXaxisDataMobitel] = useState([]);

  const [XaxisDataMobitelAreaGraph, setXaxisDataMobitelAreaGraph] = useState([]);

  const [ProjectCompletionMobitel, setProjectCompletionMobitel] = useState([]);
  const [XAxisDaysLabelMobitel, setxAxisDaysLabelMobitel] = useState([]);
  const [WeeklyProgressDataMobitel, setweeklyProgressDataMobitel] = useState([
    { name: 'Completed', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Targeted', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] }
  ]);
  const [CompletedSitesMobitel, setcompletedSitesMobitel] = useState([]);

  const [ScopeDataHuawei, setScopeDataHuawei] = useState([]);
  const [HandoverDataHuawei, setHandoverDataHuawei] = useState([]);
  const [PATPassDataHuawei, sePATPassDataHuawei] = useState();
  const [OnAirDataHuawei, setOnAirDataHuawei] = useState();
  const [HoldSitesDataHuawei, setHoldSitesDataHuawei] = useState();
  const [ProjectCompletionHuawei, setProjectCompletionHuawei] = useState([]);
  const [WeeklyProgressDataHuawei, setweeklyProgressDataHuawei] = useState([
    { name: 'Completed', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Targeted', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] }
  ]);
  const [CompletedSitesHuawei, setcompletedSitesHuawei] = useState([]);

  const [ScopeDataZTE, setScopeDataZTE] = useState([]);
  const [HandoverDataZTE, setHandoverDataZTE] = useState([]);
  const [PATPassDataZTE, sePATPassDataZTE] = useState();
  const [OnAirDataZTE, setOnAirDataZTE] = useState();
  const [HoldSitesDataZTE, setHoldSitesDataZTE] = useState();
  const [ProjectCompletionZTE, setProjectCompletionZTE] = useState([]);
  const [WeeklyProgressDataZTE, setweeklyProgressDataZTE] = useState([
    { name: 'Completed', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Targeted', type: 'column', data: [0, 0, 0, 0, 0, 0, 0] }
  ]);
  const [CompletedSitesZTE, setcompletedSitesZTE] = useState([]);

  const [MobitelLastUpdates, setMobitelLastUpdates] = useState([]);
  const [HuaweiLastUpdates, setHuaweiLastUpdates] = useState([]);
  const [ZTELastUpdates, setZTELastUpdates] = useState([]);
  const [VendorUpdatesIsShown, setVendorUpdatesIsShown] = useState(false);
  const [MobitelUpdatesIsShown, setMobitelUpdatesIsShown] = useState(true);

  const fetchMobitelProjectNames = async () => {
    const req = await axiosInstance
      .get('/mobitelProjectsOverviewTable/ProjectsArray')
      .then((res) => {
        setMobitelprojectNamesArray(res.data.mobitelProjectsNamesArrayForInsights);
      });
  };

  const fetchHuaweiVendorProjectNames = async () => {
    const req = await axiosInstance
      .get('/filteredVendorProjectsNamesArray', {
        params: { Vendor: 'Huawei' }
      })
      .then((res) => {
        setVendorprojectsHuaweiNamesArray(res.data.filteredProjectNamesArray);
      });
  };

  const fetchZTEVendorProjectNames = async () => {
    const req = await axiosInstance
      .get('/filteredVendorProjectsNamesArray', {
        params: { Vendor: 'ZTE' }
      })
      .then((res) => {
        setVendorprojectsZTENamesArray(res.data.filteredZTEProjectNamesArray);
      });
  };

  const MobitelprojectNames = MobitelprojectNamesArray.concat({
    value: '',
    label: 'Vendor Projects Only'
  });
  const VendorprojectNames = VendorprojectsHuaweiNamesArray.concat({
    value: '',
    label: 'Mobitel Projects Only'
  });

  const VendorprojectsZTENames = VendorprojectsZTENamesArray.concat({
    value: '',
    label: 'Mobitel Projects Only'
  });

  useEffect(() => {
    fetchMobitelData();
    fetchHuaweiVendorData();
    fetchMobitelScopeData();
    fetchHuaweiVendorScopeData();
    fetchMobitelColumnGraphData();
    fetchHuaweiVendorColumnGraphData();
    fetchMobitelProjectsLastUpdates();
    fetchHuaweiVendorProjectsLastUpdates();
    fetchMobitelProjectNames();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorData();
    fetchZTEVendorScopeData();
    fetchZTEVendorColumnGraphData();
    fetchZTEVendorProjectsLastUpdates();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorAreaGraphData();
    fetchHuaweiVendorAreaGraphData();
    fetchMobitelAreaGraphData();
  }, []);

  useEffect(() => {
    fetchMobitelData();
    fetchHuaweiVendorData();
    fetchMobitelScopeData();
    fetchHuaweiVendorScopeData();
    fetchMobitelColumnGraphData();
    fetchHuaweiVendorColumnGraphData();
    fetchMobitelProjectsLastUpdates();
    fetchHuaweiVendorProjectsLastUpdates();
    fetchMobitelProjectNames();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorData();
    fetchZTEVendorScopeData();
    fetchZTEVendorColumnGraphData();
    fetchZTEVendorProjectsLastUpdates();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorAreaGraphData();
    fetchHuaweiVendorAreaGraphData();
    fetchMobitelAreaGraphData();
  }, [MobitelDropdownValue]);

  useEffect(() => {
    fetchMobitelData();
    fetchHuaweiVendorData();
    fetchMobitelScopeData();
    fetchHuaweiVendorScopeData();
    fetchMobitelColumnGraphData();
    fetchHuaweiVendorColumnGraphData();
    fetchMobitelProjectsLastUpdates();
    fetchHuaweiVendorProjectsLastUpdates();
    fetchMobitelProjectNames();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorData();
    fetchZTEVendorScopeData();
    fetchZTEVendorColumnGraphData();
    fetchZTEVendorProjectsLastUpdates();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorAreaGraphData();
    fetchHuaweiVendorAreaGraphData();
    fetchMobitelAreaGraphData();
  }, [VendorHuaweiDropdownValue]);

  useEffect(() => {
    fetchMobitelData();
    fetchHuaweiVendorData();
    fetchMobitelScopeData();
    fetchHuaweiVendorScopeData();
    fetchMobitelColumnGraphData();
    fetchHuaweiVendorColumnGraphData();
    fetchMobitelProjectsLastUpdates();
    fetchHuaweiVendorProjectsLastUpdates();
    fetchMobitelProjectNames();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorData();
    fetchZTEVendorScopeData();
    fetchZTEVendorColumnGraphData();
    fetchZTEVendorProjectsLastUpdates();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorAreaGraphData();
    fetchHuaweiVendorAreaGraphData();
    fetchMobitelAreaGraphData();
  }, [VendorZTEDropdownValue]);

  const fetchMobitelColumnGraphData = () => {
    axiosInstance
      .get('/mobitelProjectsDatabasesChartDataColumnChartData', {
        params: { Project: MobitelDropdownValue }
      })
      .then((res) => {
        setChartDatForColumnGraphMobitel(res.data.chartDataForFrontEnd);
        setXaxisDataMobitel(res.data.XaxisDataForTheGraphs);
      });
  };

  // ---------AreaGraph--------------

  const fetchMobitelAreaGraphData = () => {
    axiosInstance
      .get('/mobitelProjectsDatabasesChartDataAreaChartData', {
        params: { Project: MobitelDropdownValue }
      })
      .then((res) => {
        setChartDatForAreaGraphMobitel(res.data.chartDataForFrontEnd);
        setXaxisDataMobitelAreaGraph(res.data.XaxisDataForTheGraphs);
      });
  };

  const fetchMobitelData = () => {
    axiosInstance
      .get('/mobitelProjectsDatabases', {
        params: { Project: MobitelDropdownValue }
      })
      .then((res) => {
        setHandoverDataMobitel(res.data.HandOverDataToSquares);
        sePATPassDataMobitel(res.data.PatDataForFrontEnd);
        setHoldSitesDataMobitel(res.data.HoldSitesDataforSquares);
        setOnAirDataMobitel(res.data.OnAirDataForFrontEnd);
        setProjectCompletionMobitel(res.data.ProjectCompletionForFrontEnd);
        setxAxisDaysLabelMobitel(res.data.SevenDaysOfWeek);
        setweeklyProgressDataMobitel(res.data.weeklyProgressDataForFrontEnd);
        setcompletedSitesMobitel(res.data.WeeklyProgressOnAirSitesData);
      });
  };

  const fetchMobitelScopeData = () => {
    axiosInstance
      .get('/mobitelProjectsOverviewTable', {
        params: { ProjectName: MobitelDropdownValue }
      })
      .then((res) => {
        setScopeDataMobitel(res.data.scopeDataToTheFrontEnd);
      });
  };

  const fetchHuaweiVendorColumnGraphData = () => {
    axiosInstance
      .get('/vendorProjectsDatabasesChartDataColumnChartData', {
        params: { Project: VendorHuaweiDropdownValue }
      })
      .then((res) => {
        setChartDatForColumnGraphHuawei(res.data.chartDataForFrontEnd);
      });
  };

  // -------------Area Graph----------

  const fetchHuaweiVendorAreaGraphData = () => {
    axiosInstance
      .get('/vendorProjectsDatabasesChartDataAreaChartData', {
        params: { Project: VendorHuaweiDropdownValue }
      })
      .then((res) => {
        setChartDatForAreaGraphHuawei(res.data.chartDataForFrontEnd);
      });
  };

  const fetchZTEVendorColumnGraphData = () => {
    axiosInstance
      .get('/vendorProjectsDatabasesChartDataColumnChartData', {
        params: { Project: VendorZTEDropdownValue }
      })
      .then((res) => {
        setChartDatForColumnGraphZTE(res.data.chartDataForFrontEnd);
      });
  };

  // -----------Area Graph----------

  const fetchZTEVendorAreaGraphData = () => {
    axiosInstance
      .get('/vendorProjectsDatabasesChartDataAreaChartData', {
        params: { Project: VendorZTEDropdownValue }
      })
      .then((res) => {
        setChartDatForAreaGraphZTE(res.data.chartDataForFrontEnd);
      });
  };

  const fetchHuaweiVendorData = () => {
    axiosInstance
      .get('/vendorProjectsDatabases', {
        params: { Project: VendorHuaweiDropdownValue }
      })
      .then((res) => {
        setHandoverDataHuawei(res.data.HandOverDataToSquares);
        sePATPassDataHuawei(res.data.PatDataForFrontEnd);
        setHoldSitesDataHuawei(res.data.HoldSitesDataforSquares);
        setOnAirDataHuawei(res.data.OnAirDataForFrontEnd);
        setProjectCompletionHuawei(res.data.ProjectCompletionForFrontEnd);
        setweeklyProgressDataHuawei(res.data.weeklyProgressDataForFrontEnd);
        setcompletedSitesHuawei(res.data.WeeklyProgressOnAirSitesData);
      });
  };

  const fetchZTEVendorData = () => {
    axiosInstance
      .get('/vendorProjectsDatabases', {
        params: { Project: VendorZTEDropdownValue }
      })
      .then((res) => {
        setHandoverDataZTE(res.data.HandOverDataToSquares);
        sePATPassDataZTE(res.data.PatDataForFrontEnd);
        setHoldSitesDataZTE(res.data.HoldSitesDataforSquares);
        setOnAirDataZTE(res.data.OnAirDataForFrontEnd);
        setProjectCompletionZTE(res.data.ProjectCompletionForFrontEnd);
        setweeklyProgressDataZTE(res.data.weeklyProgressDataForFrontEnd);
        setcompletedSitesZTE(res.data.WeeklyProgressOnAirSitesData);
      });
  };

  const fetchHuaweiVendorScopeData = () => {
    axiosInstance
      .get('/vendorProjectsOverviewTable', {
        params: { ProjectName: VendorHuaweiDropdownValue }
      })
      .then((res) => {
        setScopeDataHuawei(res.data.scopeDataToTheFrontEnd);
      });
  };

  const fetchZTEVendorScopeData = () => {
    axiosInstance
      .get('/vendorProjectsOverviewTable', {
        params: { ProjectName: VendorZTEDropdownValue }
      })
      .then((res) => {
        setScopeDataZTE(res.data.scopeDataToTheFrontEnd);
      });
  };

  const fetchMobitelProjectsLastUpdates = () => {
    axiosInstance
      .get('/mobitelProjectsLastUpdates', {
        params: { Project: MobitelDropdownValue }
      })
      .then((res) => {
        setMobitelLastUpdates(res.data.existingPosts);
      });
  };

  const fetchHuaweiVendorProjectsLastUpdates = () => {
    axiosInstance
      .get('/vendorProjectsLastUpdates', {
        params: { Project: VendorHuaweiDropdownValue }
      })
      .then((res) => {
        setHuaweiLastUpdates(res.data.existingPosts);
      });
  };

  const fetchZTEVendorProjectsLastUpdates = () => {
    axiosInstance
      .get('/vendorProjectsLastUpdates', {
        params: { Project: VendorZTEDropdownValue }
      })
      .then((res) => {
        setZTELastUpdates(res.data.existingPosts);
      });
  };

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

  const ScopeDataVendor = ScopeDataHuawei + ScopeDataZTE;
  const HandoverDataVendor = parseInt(HandoverDataHuawei, 10) + parseInt(HandoverDataZTE, 10);
  const PATPassDataVendor = parseInt(PATPassDataHuawei, 10) + parseInt(PATPassDataZTE, 10);
  const OnAirDataVendor = OnAirDataHuawei + OnAirDataZTE;
  const HoldSitesDataVendor = HoldSitesDataHuawei + HoldSitesDataZTE;

  const ScopeData = ScopeDataMobitel + ScopeDataVendor;
  const HandoverData = parseInt(HandoverDataMobitel, 10) + parseInt(HandoverDataVendor, 10);
  const PATPassData = parseInt(PATPassDataMobitel, 10) + parseInt(PATPassDataVendor, 10);
  const OnAirData = OnAirDataMobitel + OnAirDataVendor;
  const HoldSitesData = HoldSitesDataMobitel + HoldSitesDataVendor;

  // ----------------- Sum of two vendors Chart Data For Column Graph --------------------

  const onAirHuawei = ChartDataForColumnGraphHuawei[0];
  const onAirZTE = ChartDataForColumnGraphZTE[0];
  const AllvendorOnAir = onAirHuawei.map((a, i) => a + onAirZTE[i]);
  // ----------------------------------------------
  const PATHuawei = ChartDataForColumnGraphHuawei[1];
  const PATZTE = ChartDataForColumnGraphZTE[1];
  const AllvendorPAT = PATHuawei.map((a, i) => a + PATZTE[i]);
  // --------------------------------------------
  const SARHuawei = ChartDataForColumnGraphHuawei[2];
  const SARZTE = ChartDataForColumnGraphZTE[2];
  const AllvendorSAR = SARHuawei.map((a, i) => a + SARZTE[i]);
  // --------------------------------------------
  const ComHuawei = ChartDataForColumnGraphHuawei[3];
  const ComZTE = ChartDataForColumnGraphZTE[3];
  const AllvendorCom = ComHuawei.map((a, i) => a + ComZTE[i]);
  // --------------------------------------------
  const InsHuawei = ChartDataForColumnGraphHuawei[4];
  const InsZTE = ChartDataForColumnGraphZTE[4];
  const AllvendorIns = InsHuawei.map((a, i) => a + InsZTE[i]);
  // --------------------------------------------
  const MobHuawei = ChartDataForColumnGraphHuawei[5];
  const MobZTE = ChartDataForColumnGraphZTE[5];
  const AllvendorMob = MobHuawei.map((a, i) => a + MobZTE[i]);
  // ----------------------------------------------

  const ChartDataForColumnGraphVendor = [
    AllvendorOnAir,
    AllvendorPAT,
    AllvendorSAR,
    AllvendorCom,
    AllvendorIns,
    AllvendorMob
  ];

  // ----------------- ChartDataForColumnGraph ---------------------------------------------

  const onAir1 = ChartDataForColumnGraphMobitel[0];
  const onAir2 = ChartDataForColumnGraphVendor[0];
  const onAir = onAir1.map((a, i) => a + onAir2[i]);
  // ----------------------------------------------
  const PAT1 = ChartDataForColumnGraphMobitel[1];
  const PAT2 = ChartDataForColumnGraphVendor[1];
  const PAT = PAT1.map((a, i) => a + PAT2[i]);
  // --------------------------------------------
  const SAR1 = ChartDataForColumnGraphMobitel[2];
  const SAR2 = ChartDataForColumnGraphVendor[2];
  const SAR = SAR1.map((a, i) => a + SAR2[i]);
  // --------------------------------------------
  const Com1 = ChartDataForColumnGraphMobitel[3];
  const Com2 = ChartDataForColumnGraphVendor[3];
  const Com = Com1.map((a, i) => a + Com2[i]);
  // --------------------------------------------
  const Ins1 = ChartDataForColumnGraphMobitel[4];
  const Ins2 = ChartDataForColumnGraphVendor[4];
  const Ins = Ins1.map((a, i) => a + Ins2[i]);
  // --------------------------------------------
  const Mob1 = ChartDataForColumnGraphMobitel[5];
  const Mob2 = ChartDataForColumnGraphVendor[5];
  const Mob = Mob1.map((a, i) => a + Mob2[i]);
  // ----------------------------------------------

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

  const Site_Ho_Huawei = ChartDataForAreaGraphHuawei[0];
  const Site_HO_ZTE = ChartDataForAreaGraphZTE[0];
  const Allvendor_Site_Ho = Site_Ho_Huawei.map((a, i) => a + Site_HO_ZTE[i]);
  // ----------------------------------------------
  const Installed_Huawei = ChartDataForAreaGraphHuawei[1];
  const Installed_ZTE = ChartDataForAreaGraphZTE[1];
  const Allvendor_Installed = Installed_Huawei.map((a, i) => a + Installed_ZTE[i]);
  // --------------------------------------------
  const PAT_Pass_Huawei = ChartDataForAreaGraphHuawei[2];
  const PAT_Pass_ZTE = ChartDataForAreaGraphZTE[2];
  const Allvendor_PAT_Pass = PAT_Pass_Huawei.map((a, i) => a + PAT_Pass_ZTE[i]);
  // --------------------------------------------
  const On_Air_Huawei = ChartDataForAreaGraphHuawei[3];
  const On_Air_ZTE = ChartDataForAreaGraphZTE[3];
  const Allvendor_On_Air = On_Air_Huawei.map((a, i) => a + On_Air_ZTE[i]);

  //---------------------------------------------------

  const ChartDataForAreaGraphVendor = [
    Allvendor_Site_Ho,
    Allvendor_Installed,
    Allvendor_PAT_Pass,
    Allvendor_On_Air
  ];

  // ----------------- ChartDataForAreaGraph ---------------------------------------------

  const Site_HO1 = ChartDataForAreaGraphMobitel[0];
  const Site_Ho2 = ChartDataForAreaGraphVendor[0];
  const Site_HO = Site_HO1.map((a, i) => a + Site_Ho2[i]);
  // ----------------------------------------------
  const Installed1 = ChartDataForAreaGraphMobitel[1];
  const Installed2 = ChartDataForAreaGraphVendor[1];
  const Installed = Installed1.map((a, i) => a + Installed2[i]);
  // --------------------------------------------
  const PAT_Pass1 = ChartDataForAreaGraphMobitel[2];
  const PAT_Pass2 = ChartDataForAreaGraphVendor[2];
  const PAT_Pass = PAT_Pass1.map((a, i) => a + PAT_Pass2[i]);
  // --------------------------------------------
  const On_Air1 = ChartDataForAreaGraphMobitel[3];
  const On_Air2 = ChartDataForAreaGraphVendor[3];
  const On_Air = On_Air1.map((a, i) => a + On_Air2[i]);

  //-----------------------------------------------------------------------------------

  const areaChartData = [];
  areaChartData.push(
    { name: 'Site Ho', type: 'area', data: Site_HO },
    { name: 'installed', type: 'area', data: Installed },
    { name: 'PAT Pass', type: 'area', data: PAT_Pass },
    { name: 'On Air', type: 'area', data: On_Air }
  );

  // function transparentize(value, opacity) {
  //   const alpha = opacity === undefined ? 0.5 : 1 - opacity;
  //   return colorLib(value).alpha(alpha).rgbString();
  // }

  // const abc = {
  //   dataLine: {
  //     labels: XaxisDataMobitel,
  //     datasets: [
  //       {
  //         label: columnChartData[0].name,
  //         fill: true,
  //         backgroundColor: transparentize('rgb(80, 143, 31)'),
  //         borderColor: 'rgb(80, 143, 31)',
  //         pointHoverBackgroundColor: 'rgb(0,0,0)',
  //         pointHoverRadius: 12,
  //         data: columnChartData[0].data
  //       },
  //       {
  //         label: columnChartData[1].name,
  //         fill: true,
  //         backgroundColor: transparentize('rgb(255, 231, 0)'),
  //         borderColor: 'rgb(255, 231, 0)',
  //         pointHoverBackgroundColor: 'rgb(0,0,0)',
  //         pointHoverRadius: 12,
  //         data: columnChartData[1].data
  //       },
  //       {
  //         label: columnChartData[2].name,
  //         fill: true,
  //         backgroundColor: transparentize('rgb(45, 153, 255)'),
  //         borderColor: 'rgb(45, 153, 255)',
  //         pointHoverBackgroundColor: 'rgb(0,0,0)',
  //         pointHoverRadius: 12,
  //         data: columnChartData[2].data
  //       },
  //       {
  //         label: columnChartData[3].name,
  //         fill: true,
  //         backgroundColor: transparentize('rgb(130, 106, 249)'),
  //         borderColor: 'rgb(130, 106, 249)',
  //         pointHoverBackgroundColor: 'rgb(0,0,0)',
  //         pointHoverRadius: 12,
  //         data: columnChartData[3].data
  //       },
  //       {
  //         label: columnChartData[4].name,
  //         fill: true,
  //         backgroundColor: transparentize('rgb(44, 217, 197)'),
  //         borderColor: 'rgb(44, 217, 197)',
  //         pointHoverBackgroundColor: 'rgb(0,0,0)',
  //         pointHoverRadius: 12,
  //         data: columnChartData[4].data
  //       },
  //       {
  //         label: columnChartData[5].name,
  //         fill: true,
  //         backgroundColor: transparentize('rgb(255, 108, 64)'),
  //         borderColor: 'rgb(255, 108, 64)',
  //         pointHoverBackgroundColor: 'rgb(0,0,0)',
  //         pointHoverRadius: 12,
  //         data: columnChartData[5].data
  //       }
  //     ]
  //   }
  // };

  const a = [
    { name: columnChartData[0].name, type: 'area', data: columnChartData[0].data },
    { name: columnChartData[1].name, type: 'area', data: columnChartData[1].data },
    { name: columnChartData[2].name, type: 'area', data: columnChartData[2].data },
    { name: columnChartData[3].name, type: 'area', data: columnChartData[3].data },
    { name: columnChartData[4].name, type: 'area', data: columnChartData[4].data },
    { name: columnChartData[5].name, type: 'area', data: columnChartData[5].data }
  ];

  return (
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
              {MobitelprojectNames.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
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
              {VendorprojectNames.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
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
              {VendorprojectsZTENames.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
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
          {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <MDBContainer style={{ backgroundColor: 'rgb(4, 20, 38)', borderRadius: '15px' }}>
              <CardHeader title="All Sites Completed" subheader="Cumilative progress" />

              <Line data={abc.dataLine} />
            </MDBContainer>
          </Grid> */}

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <AppWebsiteVisits chartData={a} xaxisData={XaxisDataMobitel} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits chartData={columnChartData} xaxisData={XaxisDataMobitel} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              projectCompletionMobitel={ProjectCompletionMobitel}
              projectCompletionHuawei={ProjectCompletionHuawei}
              projectCompletionZTE={ProjectCompletionZTE}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={12} mb={0}>
            <AppWebsiteVisits1
              xAxisDaysLabel={XAxisDaysLabelMobitel}
              weeklyProgressDataMobitel={WeeklyProgressDataMobitel}
              weeklyProgressDataHuawei={WeeklyProgressDataHuawei}
              weeklyProgressDataZTE={WeeklyProgressDataZTE}
              completedSitesMobitel={CompletedSitesMobitel}
              completedSitesHuawei={CompletedSitesHuawei}
              completedSitesZTE={CompletedSitesZTE}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12} mb={0}>
            <Card style={{ height: '520px' }}>
              <Stack sx={{ p: 2 }} direction="row">
                <Button
                  color="secondary"
                  onClick={() => {
                    showMobitelProjectsUpdates();
                    fetchMobitelProjectsLastUpdates();
                    fetchHuaweiVendorProjectsLastUpdates();
                    fetchZTEVendorProjectsLastUpdates();
                  }}
                >
                  Mobitel projects
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    showVendorProjectsUpdates();
                    fetchMobitelProjectsLastUpdates();
                    fetchHuaweiVendorProjectsLastUpdates();
                    fetchZTEVendorProjectsLastUpdates();
                  }}
                >
                  Vendor projects
                </Button>
              </Stack>
              {MobitelUpdatesIsShown && (
                <LastUpdatesMobitel mobitelLastUpdates={MobitelLastUpdates} />
              )}
              {VendorUpdatesIsShown && (
                <LastUpdatesVendor
                  huaweiLastUpdates={HuaweiLastUpdates}
                  zteLastUpdates={ZTELastUpdates}
                />
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}