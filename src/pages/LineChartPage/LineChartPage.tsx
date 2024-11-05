import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useLinePageStore } from '@/store';
import { LineChart, Skeleton, PageComponent, Alert } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';

export const LineChartPage = () => {
  const { goBack } = useAppNavigate();
  const { id, typelinecharts } = useParams();
  const { tg, username } = useTelegram();
  const { responce, loading, error, getServerOneMetric } = useLinePageStore();

  useEffect(() => {
    tg.BackButton.show().onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  useEffect(() => {
    getServerOneMetric(id, typelinecharts, '1d');
  }, []);

  return (
    <PageComponent loading={loading} username={username} time={responce?.timestamp}>
      {error && <Alert status="error">{error}</Alert>}
      {loading && <Skeleton variant="chart" />}
      {responce && <LineChart {...responce.result} />}
    </PageComponent>
  );
};
