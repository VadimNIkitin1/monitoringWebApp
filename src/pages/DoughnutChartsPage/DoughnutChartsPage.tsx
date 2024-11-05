import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DoughnutChart, Skeleton, PageComponent, Alert } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';

import style from './DoughnutChartsPage.module.scss';
import { useDoughnutPageStore } from '@/store';

export const DoughnutChartsPage = () => {
  const { goBack } = useAppNavigate();
  const { tg, username } = useTelegram();
  const { responce, loading, error, getServerMetrics } = useDoughnutPageStore();
  const { id } = useParams();

  useEffect(() => {
    tg.BackButton.show().onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  useEffect(() => {
    getServerMetrics(id);
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
