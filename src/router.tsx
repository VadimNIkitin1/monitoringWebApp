import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import { DoughnutChartsPage } from './pages/DoughnutChartsPage';
import { LineChartPage } from './pages/LineChartPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MonitoringPage } from './pages/MonitoringPage/MonitoringPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<MonitoringPage />} errorElement={<ErrorPage />} />
      <Route
        index
        path="/doughnutcharts"
        element={<DoughnutChartsPage />}
        errorElement={<ErrorPage />}
      />
      <Route index path="/linecharts" element={<LineChartPage />} errorElement={<ErrorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
