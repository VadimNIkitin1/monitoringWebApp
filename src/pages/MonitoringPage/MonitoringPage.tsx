import { useEffect, useState } from 'react';

import { useTelegram } from '@/hooks';
import { VMCard, Skeleton } from '@/components';
import { getServerList } from '@/api';
import { IServer } from './types';

import style from './MonitoringPage.module.scss';

import { Alert } from '@/components/ui/alert';

export const MonitoringPage = () => {
  const { tg, username } = useTelegram();
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [serverList, setServerList] = useState<IServer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getServerList();
        if (res.result && res.result.length) {
          setServerList(res.result);
        } else {
          setServerList([]);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
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

  return (
    <div className={style.page}>
      <h1 className={style.header}>MonitoRing</h1>
      <div className={style.content}>
        <div className={style.infoTable}>
          <div className={style.infoRow}>
            <p>User:</p>
            <div>
              {loading ? (
                <Skeleton className={style.small} />
              ) : (
                <p>{username ? username : 'not tg'}</p>
              )}
            </div>
          </div>
          <div className={style.infoRow}>
            <p>Role:</p>
            <div>{loading ? <Skeleton className={style.small} /> : <p>Client/Company</p>}</div>
          </div>
          <div className={style.infoRow}>
            <p>Last Update:</p>
            <div>
              {loading ? (
                <Skeleton className={style.small} />
              ) : (
                <p>
                  {currentTime} / {currentDate}
                </p>
              )}
            </div>
          </div>
        </div>
        {!error && !serverList.length && !loading && (
          <Alert status="info">Серверов нет в работе!</Alert>
        )}
        {error && <Alert status="error">{error}</Alert>}
        {loading && (
          <div className={style.skeletonContainer}>
            <Skeleton className={style.middle} />
            <Skeleton className={style.middle} />
            <Skeleton className={style.middle} />
          </div>
        )}
        <div className={style.cardContainer}>
          {serverList.map((server: IServer) => (
            <VMCard key={server.id} id={server.id} name={server.name} status={server.status} />
          ))}
        </div>
      </div>
      <div className={style.copyright}>© BigDigital</div>
    </div>
  );
};
