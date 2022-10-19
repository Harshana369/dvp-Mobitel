import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------- project completion pie chart in the dash board  ---------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 82;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

/* eslint-disable */

// ----------------------------------------------------------------------
export default function AppCurrentVisits() {
  const mobitelDatabseDetails = useSelector((state) => state.mobitelDatabse);
  const { mobitelDatabaseLoading, error, mobitelDatabaseData } = mobitelDatabseDetails;

  const huaweiDatabseDetails = useSelector((state) => state.huaweiDatabase);
  const { huaweiDatabaseLoading, huaweiDatabaseData } = huaweiDatabseDetails;

  const zteDatabseDetails = useSelector((state) => state.zteDatabase);
  const { zteDatabaseLoading, zteDatabaseData } = zteDatabseDetails;

  const theme = useTheme();

  const projectCompletionVendor = [];
  const ProjCom = [];

  if (huaweiDatabaseLoading || zteDatabaseLoading) {
    const ProjComHuawei = huaweiDatabaseData.ProjectCompletionForFrontEnd;
    const ProjComZTE = zteDatabaseData.ProjectCompletionForFrontEnd;
    projectCompletionVendor = ProjComHuawei.map((a, i) => a + ProjComZTE[i]);
  }

  if (mobitelDatabaseLoading || huaweiDatabaseLoading || zteDatabaseLoading) {
    const ProjCom1 = mobitelDatabaseData.ProjectCompletionForFrontEnd;
    const ProjCom2 = projectCompletionVendor;
    ProjCom = ProjCom1.map((a, i) => a + ProjCom2[i]);
  }

  const CHART_DATA = ProjCom;
  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.error.main,

      theme.palette.info.main
    ],
    labels: ['Completed', 'Pending', 'Hold'],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  return (
    <>
      {mobitelDatabaseLoading || huaweiDatabaseLoading || zteDatabaseLoading ? (
        <h1>Loding....</h1>
      ) : error ? (
        <h1>error...</h1>
      ) : (
        <Card>
          <CardHeader title="Project Completion" />
          <ChartWrapperStyle dir="ltr">
            <ReactApexChart type="donut" series={CHART_DATA} options={chartOptions} height={310} />
          </ChartWrapperStyle>
          <br />
          <br />
        </Card>
      )}
    </>
  );
}
