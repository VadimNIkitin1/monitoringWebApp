import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { LineChart, Skeleton, PageComponent, Alert } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';
import { getServerOneMetric } from '@/api';

import { IResponceLineChartPage } from './types';

export const LineChartPage = () => {
  const { goBack } = useAppNavigate();
  const { company_id, typelinecharts } = useParams();
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
        const res = await getServerOneMetric(company_id, typelinecharts, '1d');
        if (res) {
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
