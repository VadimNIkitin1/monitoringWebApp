import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DoughnutChart, Skeleton } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';
import { TypeLineChart } from '@/constans';
import { getServerMetrics } from '@/api';
import { IDataMetrics } from './types';

import style from './DoughnutChartsPage.module.scss';
import { Alert } from '@/components/ui/alert';

export const DoughnutChartsPage = () => {
  const { server_id } = useParams();
  const [dataMetrics, setDataMetrics] = useState<IDataMetrics | null>(null);
  const { goBack, goToLineChart } = useAppNavigate();
  const { tg, username } = useTelegram();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    tg.BackButton.show().onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const res = await getServerMetrics(server_id);
        setDataMetrics(res.result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
    setCurrentTime(timeString);
    setCurrentDate(dateString);
  }, []);

  return (
    <div className={style.page}>
      <h1 className={style.header}>MonitoRing</h1>
      <div className={style.content}>
        <div className={style.infoTable}>
          <div className={style.infoRow}>
            <p>User:</p>
            <div>
              {loading ? (
                <Skeleton className={style.small} />
              ) : (
                <p>{username ? username : 'not tg'}</p>
              )}
            </div>
          </div>
          <div className={style.infoRow}>
            <p>Role:</p>
            <div>{loading ? <Skeleton className={style.small} /> : <p>Client/Company</p>}</div>
          </div>
          <div className={style.infoRow}>
            <p>Last Update:</p>
            <div>
              {loading ? (
                <Skeleton className={style.small} />
              ) : (
                <p>
                  {currentTime} / {currentDate}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {error && <Alert status="error">{error}</Alert>}
      <div className={style.chartsContainer}>
        <div onClick={() => goToLineChart(TypeLineChart.CPU)}>
          {dataMetrics && dataMetrics.cpu ? (
            <DoughnutChart chartsData={dataMetrics.cpu} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div onClick={() => goToLineChart(TypeLineChart.RAM)}>
          {dataMetrics && dataMetrics.ram ? (
            <DoughnutChart chartsData={dataMetrics.ram} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div onClick={() => goToLineChart(TypeLineChart.DISK)}>
          {dataMetrics && dataMetrics.disk ? (
            <DoughnutChart chartsData={dataMetrics.disk} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div onClick={() => goToLineChart(TypeLineChart.NET)}>
          {dataMetrics && dataMetrics.net ? (
            <DoughnutChart chartsData={dataMetrics.net} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className={style.copyright}>© BigDigital</div>
    </div>
  );
};
