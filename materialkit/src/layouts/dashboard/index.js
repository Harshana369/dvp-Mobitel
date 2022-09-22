import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import CryptoJS from 'react-native-crypto-js';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Empty from './Empty';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 70;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// -----------------------------------------------------------------------------------
export default function DashboardLayout({ isOpenSidebar, onCloseSidebar, onOpenSidebar }) {
  const [open, setOpen] = useState(false);
  const [fullScreenMode, setfullScreenMode] = useState('on');

  const jsonDecInfo = '';

  const getUserData = () => {
    const secret = 'AuH8e#?y!E87nyVh';
    const encryptedData = localStorage.getItem('encInf');

    if (encryptedData) {
      const decData = CryptoJS.AES.decrypt(encryptedData, secret);
      const decInfo = decData.toString(CryptoJS.enc.Utf8);
      jsonDecInfo(JSON.parse(decInfo));
    }
  };

  useEffect(() => {
    getUserData();
    fetchFullScreenStatus();
  }, []);

  const fetchFullScreenStatus = () => {
    setfullScreenMode(localStorage.getItem('mode'));
  };

  DashboardNavbar.propTypes = {
    onOpenSidebar: PropTypes.func
  };

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      {!fullScreenMode || fullScreenMode === 'on' ? (
        <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      ) : (
        <Empty />
      )}
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
