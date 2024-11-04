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
      <Route>
        <Route index path="/" element={<AuthRedirect />} errorElement={<ErrorPage />} />
        <Route path="/auth" element={<AuthPage />} errorElement={<ErrorPage />} />
        <Route path="/:company_id" element={<MonitoringPage />} errorElement={<ErrorPage />} />
        <Route
          path="/:company_id/doughnutcharts"
          element={<DoughnutChartsPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/:company_id/doughnutcharts/:typelinecharts/linecharts"
          element={<LineChartPage />}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
