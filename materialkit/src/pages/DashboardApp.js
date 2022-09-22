import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// material
import { Grid, Container, Typography, Stack, Card, Button } from '@mui/material';
// components
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Page from '../components/Page';
import AppWeeklySales from 'src/components/_dashboard/Insights/siteengineer/AppWeeklySales';
import AppBugReports1 from 'src/components/_dashboard/MobitelProjectsSiteEngineers/siteengineer/AppBugReports1';
import AppItemOrders from 'src/components/_dashboard/Insights/siteengineer/AppItemOrders';
import AppNewUsers from 'src/components/_dashboard/Insights/siteengineer/AppNewUsers';
import AppBugReports from 'src/components/_dashboard/Insights/siteengineer/AppBugReports';
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWebsiteVisits1,
  LastUpdatesVendor
} from 'src/components/_dashboard/Insights';
import { LastUpdatesMobitel } from 'src/components/_dashboard/MobitelProjectsInsights';

export default function DashboardApp() {
  return (
    <div>
      <h1>harshana</h1>
    </div>
  );
}
