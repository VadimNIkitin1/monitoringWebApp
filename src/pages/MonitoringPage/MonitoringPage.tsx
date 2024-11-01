import { useEffect, useState } from 'react';

import { useTelegram } from '@/hooks';
import { VMCard } from '@/components';
import { getServerList } from '@/api';
import { IServer } from './types';

import style from './MonitoringPage.module.scss';

export const MonitoringPage = () => {
  const { tg, username } = useTelegram();
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [serverList, setServerList] = useState<IServer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getServerList();
        setServerList(res);
      } catch (error) {
        console.error('Error fetching server list:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    tg.expand();
    tg.BackButton.hide();
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
            <p>{username ? username : 'not tg'}</p>
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
          {serverList.map((server: IServer) => (
            <VMCard key={server.id} id={server.id} name={server.name} status={server.status} />
          ))}
        </div>
      </div>
    </div>
  );
};
