// import { useState } from 'react';
// import { getPrometheusData } from '../api/api';
import { useAppNavigate } from '../../hooks/useAppNavigate';
import { Button } from '@/components/ui/button';
import style from './MonitoringPage.module.scss';
import { useTelegram } from '@/hooks/useTelegram';
import { useEffect, useState } from 'react';
import { VMCard } from '@/components/VMCard/VMCard';

export const MonitoringPage = () => {
  const { goToDoughnutCharts, goBack } = useAppNavigate();
  const { tg } = useTelegram();
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    tg.expand();
    tg.BackButton.show().onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
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

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getPrometheusData();
  //   };
  //   fetchData();
  // }, []);

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
            <p>
              {currentTime} / {currentDate}
            </p>
          </div>
        </div>
        <div className={style.cardContainer}>
          <VMCard name="VM1" status="up" />
          <VMCard name="VM2" status="warn" />
          <VMCard name="VM3" status="disconect" />
        </div>
      </div>
      <Button className={style.btn} onClick={() => goToDoughnutCharts()}>
        DoughnutCharts
      </Button>
    </div>
  );
};
