import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DoughnutChart, Skeleton, PageComponent } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';
import { getServerMetrics } from '@/api';
import { IResponceDoughnutChartPage } from './types';

import { Alert } from '@/components/ui/alert';

import style from './DoughnutChartsPage.module.scss';

export const DoughnutChartsPage = () => {
  const { server_id } = useParams();
  const { goBack } = useAppNavigate();
  const { tg, username } = useTelegram();
  const [responce, setResponce] = useState<IResponceDoughnutChartPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setResponce(res);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <PageComponent loading={loading} username={username} time={responce?.timestamp}>
      {error && <Alert status="error">{error}</Alert>}
      {loading && (
        <div className={style.skeletonContainer}>
          <Skeleton variant="circle" />
          <Skeleton variant="circle" />
          <Skeleton variant="circle" />
          <Skeleton variant="circle" />
        </div>
      )}
      <div className={style.chartsContainer}>
        <div>{responce && <DoughnutChart {...responce.result.cpu} />}</div>
        <div>{responce && <DoughnutChart {...responce.result.ram} />}</div>
        <div>{responce && <DoughnutChart {...responce.result.disk} />}</div>
        <div>{responce && <DoughnutChart {...responce.result.net} />}</div>
      </div>
    </PageComponent>
  );
};
