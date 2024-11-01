import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import {
  DoughnutChartsPage,
  LineChartPage,
  NotFoundPage,
  MonitoringPage,
  ErrorPage,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<MonitoringPage />} errorElement={<ErrorPage />} />
      <Route
        index
        path="/:server_id/doughnutcharts"
        element={<DoughnutChartsPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        index
        path="/:server_id/doughnutcharts/:typelinecharts/linecharts"
        element={<LineChartPage />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
