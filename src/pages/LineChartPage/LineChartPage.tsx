import { useEffect, useState } from 'react';

import { LineChart } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';

import style from './LineChartPage.module.scss';
import { useParams } from 'react-router-dom';
import { getServerOneMetric } from '@/api/metrics';

export const LineChartPage = () => {
  const { goBack } = useAppNavigate();
  const { typelinecharts, server_id } = useParams();
  const { tg } = useTelegram();
  const [metricData, setMetricData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(error);
  console.log(loading);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const res = await getServerOneMetric(server_id, typelinecharts, '1d');
        if (res.result && res.result.values.length) {
          setMetricData(res.result);
        } else {
          setMetricData([]);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    tg.BackButton.show().onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  return <div className={style.page}>{metricData && <LineChart metricData={metricData} />}</div>;
};
