import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Stack, Typography, Box } from '@mui/material';

import MaterialTable from 'material-table';
import Page from '../components/Page';

// const empList = [
//   { id: 1, name: 'Neeraj', email: 'neeraj@gmail.com' },
//   { id: 2, name: 'Raj', email: 'raj@gmail.com' },
//   { id: 3, name: 'David', email: 'david342@gmail.com' },
//   { id: 4, name: 'Vikas', email: 'vikas75@gmail.com' }
// ];

// const columns = [
//   { title: 'ID', field: 'id' },
//   { title: 'Name', field: 'name' },
//   { title: 'Email', field: 'email' },
//   { title: 'Status', field: 'status' },
//   { title: 'Role', field: 'role' }
// ];

export default function Material() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const [data, setData] = useState();
  const [columns, setColumns] = useState();

  const getMateriyalColumns = async () => {
    await axiosInstance.get('/materialProjectsDatabases/getall').then((res) => {
      // console.log(res.data.success[0].taskHistory);
      setColumns(res.data.success[0].headerproperties);
      setData(res.data.success[0].properties);
    });
  };

  useEffect(() => {
    getMateriyalColumns();
  }, []);
  return (
    <Page title="Mobitel Projects Databases | Projects Management Database">
      {/* <Typography variant="h6" gutterBottom>
        Mobitel Projects Databases
      </Typography> */}
      <Box>
        <MaterialTable
          title="Material Data"
          data={data}
          columns={columns}
          options={{ filtering: true }}
        />
      </Box>
    </Page>
  );
}
