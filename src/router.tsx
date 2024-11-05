import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import {
  DoughnutChartsPage,
  LineChartPage,
  NotFoundPage,
  MonitoringPage,
  ErrorPage,
  AuthPage,
} from './pages';

import { AuthRedirect } from '@/components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthRedirect />} errorElement={<ErrorPage />} />
      <Route path="/auth" element={<AuthPage />} errorElement={<ErrorPage />} />
      <Route path="/monitoring" element={<MonitoringPage />} errorElement={<ErrorPage />} />
      <Route
        path="/monitoring/:id/doughnutcharts"
        element={<DoughnutChartsPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/monitoring/:id/doughnutcharts/:typelinecharts"
        element={<LineChartPage />}
        errorElement={<ErrorPage />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
