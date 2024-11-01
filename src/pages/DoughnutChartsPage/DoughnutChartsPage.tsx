import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DoughnutChart } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';
import { TypeLineChart } from '@/constans';
import { getServerMetrics } from '@/api';
import { IDataMetrics } from './types';

import style from './DoughnutChartsPage.module.scss';

export const DoughnutChartsPage = () => {
  const { server_id } = useParams();
  const [dataMetrics, setDataMetrics] = useState<IDataMetrics | null>(null);
  const { goBack, goToLineChart } = useAppNavigate();
  const { tg } = useTelegram();

  useEffect(() => {
    tg.BackButton.show().onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getServerMetrics(server_id);
        setDataMetrics(res);
      } catch (error) {
        console.error('Error fetching server list:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={style.page}>
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
  );
};
