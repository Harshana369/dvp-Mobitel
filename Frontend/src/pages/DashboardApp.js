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
import Loading from '../components/Loading';
/* eslint-disable */

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

  //---------------------------

  const mobitelDatabseDetails = useSelector((state) => state.mobitelDatabse);
  const { mobitelDatabseLoading, mobitelDatabaseData } = mobitelDatabseDetails;

  const mobitelScopDetails = useSelector((state) => state.mobitelScope);
  const { mobitelScopeLoading, mobitelScopeData } = mobitelScopDetails;

  //------------------------

  const huaweiDatabseDetails = useSelector((state) => state.huaweiDatabase);
  const { huaweiDatabaseLoading, huaweiDatabaseData } = huaweiDatabseDetails;

  const huaweiScopeDetails = useSelector((state) => state.huaweiScope);
  const { huaweiScopeLoading, huaweiScopeData } = huaweiScopeDetails;
  //--------------------------

  const zteDatabseDetails = useSelector((state) => state.zteDatabase);
  const { zteDatabaseLoading, zteDatabaseData } = zteDatabseDetails;

  const zteScopeDetails = useSelector((state) => state.zteScope);
  const { zteScopeLoading, zteScopeData } = zteScopeDetails;

  const dispatch = useDispatch();

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
    dispatch(fetchMobitelData(MobitelDropdownValue));
    dispatch(fetchMobitelScopeData(MobitelDropdownValue));
    //--------------------
    dispatch(fetchHuaweiData(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiScopeData(VendorHuaweiDropdownValue));
    //----------------------
    dispatch(fetchZTEData(VendorZTEDropdownValue));
    dispatch(fetchZTEScopeData(VendorZTEDropdownValue));
    //-----------------------
    fetchMobitelDatabase();
    fetchMobitelScope();
    fetchZTEVendorData();
    fetchHuaweiVendorData();
    fetchHuaweiVendorScope();
    fetchMobitelColumnGraphData();
    fetchHuaweiVendorColumnGraphData();
    fetchMobitelProjectsLastUpdates();
    fetchHuaweiVendorProjectsLastUpdates();
    fetchMobitelProjectNames();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorScope();
    fetchZTEVendorColumnGraphData();
    fetchZTEVendorProjectsLastUpdates();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorAreaGraphData();
    fetchHuaweiVendorAreaGraphData();
    fetchMobitelAreaGraphData();
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMobitelData(MobitelDropdownValue));
    dispatch(fetchMobitelScopeData(MobitelDropdownValue));
    //--------------------
    dispatch(fetchHuaweiData(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiScopeData(VendorHuaweiDropdownValue));
    //----------------------
    dispatch(fetchZTEData(VendorZTEDropdownValue));
    dispatch(fetchZTEScopeData(VendorZTEDropdownValue));
    //-----------------------
    fetchMobitelDatabase();
    fetchMobitelScope();
    fetchZTEVendorData();
    fetchHuaweiVendorData();
    fetchHuaweiVendorScope();
    fetchMobitelColumnGraphData();
    fetchHuaweiVendorColumnGraphData();
    fetchMobitelProjectsLastUpdates();
    fetchHuaweiVendorProjectsLastUpdates();
    fetchMobitelProjectNames();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorScope();
    fetchZTEVendorColumnGraphData();
    fetchZTEVendorProjectsLastUpdates();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorAreaGraphData();
    fetchHuaweiVendorAreaGraphData();
    fetchMobitelAreaGraphData();
  }, [MobitelDropdownValue, dispatch]);

  useEffect(() => {
    dispatch(fetchMobitelData(MobitelDropdownValue));
    dispatch(fetchMobitelScopeData(MobitelDropdownValue));
    //--------------------
    dispatch(fetchHuaweiData(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiScopeData(VendorHuaweiDropdownValue));
    //----------------------
    dispatch(fetchZTEData(VendorZTEDropdownValue));
    dispatch(fetchZTEScopeData(VendorZTEDropdownValue));
    //-----------------------
    fetchMobitelDatabase();
    fetchMobitelScope();
    fetchZTEVendorData();
    fetchHuaweiVendorData();
    fetchHuaweiVendorScope();
    fetchMobitelColumnGraphData();
    fetchHuaweiVendorColumnGraphData();
    fetchMobitelProjectsLastUpdates();
    fetchHuaweiVendorProjectsLastUpdates();
    fetchMobitelProjectNames();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorScope();
    fetchZTEVendorColumnGraphData();
    fetchZTEVendorProjectsLastUpdates();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorAreaGraphData();
    fetchHuaweiVendorAreaGraphData();
    fetchMobitelAreaGraphData();
  }, [VendorHuaweiDropdownValue, dispatch]);

  useEffect(() => {
    dispatch(fetchMobitelData(MobitelDropdownValue));
    dispatch(fetchMobitelScopeData(MobitelDropdownValue));
    //--------------------
    dispatch(fetchHuaweiData(VendorHuaweiDropdownValue));
    dispatch(fetchHuaweiScopeData(VendorHuaweiDropdownValue));
    //----------------------
    dispatch(fetchZTEData(VendorZTEDropdownValue));
    dispatch(fetchZTEScopeData(VendorZTEDropdownValue));
    //-----------------------
    fetchMobitelDatabase();
    fetchMobitelScope();
    fetchZTEVendorData();
    fetchHuaweiVendorData();
    fetchHuaweiVendorScope();
    fetchMobitelColumnGraphData();
    fetchHuaweiVendorColumnGraphData();
    fetchMobitelProjectsLastUpdates();
    fetchHuaweiVendorProjectsLastUpdates();
    fetchMobitelProjectNames();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorScope();
    fetchZTEVendorColumnGraphData();
    fetchZTEVendorProjectsLastUpdates();
    fetchHuaweiVendorProjectNames();
    fetchZTEVendorProjectNames();
    fetchZTEVendorAreaGraphData();
    fetchHuaweiVendorAreaGraphData();
    fetchMobitelAreaGraphData();
  }, [VendorZTEDropdownValue, dispatch]);

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

  const fetchMobitelDatabase = () => {
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

  const fetchMobitelScope = () => {
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

  const fetchHuaweiVendorScope = () => {
    axiosInstance
      .get('/vendorProjectsOverviewTable', {
        params: { ProjectName: VendorHuaweiDropdownValue }
      })
      .then((res) => {
        setScopeDataHuawei(res.data.scopeDataToTheFrontEnd);
      });
  };

  const fetchZTEVendorScope = () => {
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
  //--------------------------------------------------
  const On_Air_Huawei = ChartDataForAreaGraphHuawei[1];
  const On_Air_ZTE = ChartDataForAreaGraphZTE[1];
  const Allvendor_On_Air = On_Air_Huawei.map((a, i) => a + On_Air_ZTE[i]);
  //---------------------------------------------------
  const PTA_Pass_Huawei = ChartDataForAreaGraphHuawei[2];
  const PTA_Pass_ZTE = ChartDataForAreaGraphZTE[2];
  const Allvendor_PTA_Pass = PTA_Pass_Huawei.map((a, i) => a + PTA_Pass_ZTE[i]);
  //---------------------------------------------------
  const SAR_Huawei = ChartDataForAreaGraphHuawei[3];
  const SAR_ZTE = ChartDataForAreaGraphZTE[3];
  const Allvendor_SAR = SAR_Huawei.map((a, i) => a + SAR_ZTE[i]);
  //---------------------------------------------------
  const Commisioned_Huawei = ChartDataForAreaGraphHuawei[4];
  const Commisioned_ZTE = ChartDataForAreaGraphZTE[4];
  const Allvendor_Commisioned = Commisioned_Huawei.map((a, i) => a + Commisioned_ZTE[i]);
  //---------------------------------------------------
  const Installed_Huawei = ChartDataForAreaGraphHuawei[5];
  const Installed_ZTE = ChartDataForAreaGraphZTE[5];
  const Allvendor_Installed = Installed_Huawei.map((a, i) => a + Installed_ZTE[i]);
  //--------------------------------------------------
  const Mobilized_Huawei = ChartDataForAreaGraphHuawei[6];
  const Mobilized_ZTE = ChartDataForAreaGraphZTE[6];
  const Allvendor_Mobilized = Mobilized_Huawei.map((a, i) => a + Mobilized_ZTE[i]);
  //-----------------------------------------------

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

  const A_Ho_1 = ChartDataForAreaGraphMobitel[0];
  const A_Ho_2 = ChartDataForAreaGraphVendor[0];
  const A_Ho = A_Ho_1.map((a, i) => a + A_Ho_2[i]);

  // --------------------------------------------
  const A_On_Air1 = ChartDataForAreaGraphMobitel[1];
  const A_On_Air2 = ChartDataForAreaGraphVendor[1];
  const A_On_Air = A_On_Air1.map((a, i) => a + A_On_Air2[i]);

  //---------------------------------------------
  const A_PAT_Pass1 = ChartDataForAreaGraphMobitel[2];
  const A_PAT_Pass2 = ChartDataForAreaGraphVendor[2];
  const A_PAT_Pass = A_PAT_Pass1.map((a, i) => a + A_PAT_Pass2[i]);
  //--------------------------------------------

  const A_SAR_1 = ChartDataForAreaGraphMobitel[3];
  const A_SAR_2 = ChartDataForAreaGraphVendor[3];
  const A_SAR = A_SAR_1.map((a, i) => a + A_SAR_2[i]);
  //--------------------------------------------

  const A_Commisioned_1 = ChartDataForAreaGraphMobitel[4];
  const A_Commisioned_2 = ChartDataForAreaGraphVendor[4];
  const A_Commisioned = A_Commisioned_1.map((a, i) => a + A_Commisioned_2[i]);
  //---------------------------------------------

  const A_Installed_1 = ChartDataForAreaGraphMobitel[5];
  const A_Installed_2 = ChartDataForAreaGraphVendor[5];
  const A_Installed = A_Installed_1.map((a, i) => a + A_Installed_2[i]);
  //---------------------------------------------

  const A_Mobilized_1 = ChartDataForAreaGraphMobitel[6];
  const A_Mobilized_2 = ChartDataForAreaGraphVendor[6];
  const A_Mobilized = A_Mobilized_1.map((a, i) => a + A_Mobilized_2[i]);
  //---------------------------------------------

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
      labels: XaxisDataMobitelAreaGraph,
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
          {mobitelScopeLoading || huaweiScopeLoading || zteScopeLoading ? (
            <Loading />
          ) : (
            <Grid item xs={12} sm={6} md={2.4}>
              <AppWeeklySales scopeData={ScopeData} />
            </Grid>
          )}

          {mobitelDatabseLoading || huaweiDatabaseLoading || zteDatabaseLoading ? (
            <Loading />
          ) : (
            <Grid item xs={12} sm={6} md={2.4}>
              <AppBugReports1 handoverData={HandoverData} />
            </Grid>
          )}

          {mobitelDatabseLoading || huaweiDatabaseLoading || zteDatabaseLoading ? (
            <Loading />
          ) : (
            <Grid item xs={12} sm={6} md={2.4}>
              <AppItemOrders patData={PATPassData} />
            </Grid>
          )}

          {mobitelDatabseLoading || huaweiDatabaseLoading || zteDatabaseLoading ? (
            <Loading />
          ) : (
            <Grid item xs={12} sm={6} md={2.4}>
              <AppNewUsers onAirData={OnAirData} />
            </Grid>
          )}

          {mobitelDatabseLoading || huaweiDatabaseLoading || zteDatabaseLoading ? (
            <Loading />
          ) : (
            <Grid item xs={12} sm={6} md={2.4}>
              <AppBugReports holdData={HoldSitesData} />
            </Grid>
          )}

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <MDBContainer style={{ backgroundColor: 'rgb(4, 20, 38)', borderRadius: '15px' }}>
              <CardHeader title="All Sites Completed" subheader="Cumilative progress" />

              <Line data={areachat_chart_one.dataLine} />
            </MDBContainer>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <AppWebsiteVisits chartData={areaChartData} xaxisData={XaxisDataMobitelAreaGraph} />
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
