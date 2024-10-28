import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import { ChartsPage } from './pages/ChartsPage/ChartsPage';
import NotFoundPage from './pages/NotFoundPage';
import { MonitoringPage } from './pages/MonitoringPage/MonitoringPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<MonitoringPage />} errorElement={<ErrorPage />} />
      <Route index path="/charts" element={<ChartsPage />} errorElement={<ErrorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
