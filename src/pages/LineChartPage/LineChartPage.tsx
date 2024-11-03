import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { LineChart, Skeleton, PageComponent } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';
import { getServerOneMetric } from '@/api';

import { IResponceLineChartPage } from './types';

import { Alert } from '@/components/ui/alert';

export const LineChartPage = () => {
  const { goBack } = useAppNavigate();
  const { typelinecharts, server_id } = useParams();
  const { tg, username } = useTelegram();
  const [responce, setResponce] = useState<IResponceLineChartPage | null>(null);
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
        const res = await getServerOneMetric(server_id, typelinecharts, '1d');
        if (res.result && res.result.values.length) {
          setResponce(res);
        } else {
          setResponce(null);
        }
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
      {loading && <Skeleton variant="chart" />}
      {responce && <LineChart {...responce.result} />}
    </PageComponent>
  );
};
