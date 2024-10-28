// import { useState } from 'react';
// import { getPrometheusData } from '../api/api';
import { useAppNavigate } from '../../hooks/useAppNavigate';
import { Button } from '@/components/ui/button';
import style from './MonitoringPage.module.scss';
import { useTelegram } from '@/hooks/useTelegram';
import { useEffect } from 'react';
import { VMCard } from '@/components/VMCard/VMCard';

export const MonitoringPage = () => {
  const { goToCharts } = useAppNavigate();
  const { tg, initDataHash, id, queryId, initData } = useTelegram();

  useEffect(() => {
    tg.expand();
  }, []);

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getPrometheusData();
  //   };
  //   fetchData();
  // }, []);

  console.log(initDataHash);
  console.log(initData);
  console.log(id);
  console.log(queryId);

  return (
    <div className={style.page}>
      <h1 className={style.header}>BigMonitoring</h1>
      <div className={style.content}>
        <div className={style.infoTable}>
          <div className={style.infoRow}>
            <p>User:</p>
            <p>Sekavovin</p>
          </div>
          <div className={style.infoRow}>
            <p>Role:</p>
            <p>Client/Company</p>
          </div>
          <div className={style.infoRow}>
            <p>Last Update:</p>
            <p>13:32:12</p>
          </div>
        </div>
        <div className={style.cardContainer}>
          <VMCard name="VM1" status="up" />
          <VMCard name="VM2" status="warn" />
          <VMCard name="VM3" status="disconect" />
        </div>
      </div>
      <Button className={style.btn} onClick={() => goToCharts()}>
        Мониторинг
      </Button>
    </div>
  );
};
