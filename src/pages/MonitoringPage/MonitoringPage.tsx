import { useEffect, useState } from 'react';

import { useTelegram } from '@/hooks';
import { VMCard, Skeleton, PageComponent } from '@/components';
import { getServerList } from '@/api';
import { IResponceForMonitoringPage, IServer } from './types';

import { Alert } from '@/components/ui/alert';

import style from './MonitoringPage.module.scss';

export const MonitoringPage = () => {
  const { tg, username } = useTelegram();
  const [responce, setResponce] = useState<IResponceForMonitoringPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getServerList();
        if (res.result && res.result.length) {
          setResponce(res);
        } else {
          setResponce(null);
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

  return (
    <PageComponent loading={loading} username={username} time={responce?.timestamp}>
      {error && <Alert status="error">{error}</Alert>}
      {loading && (
        <div className={style.skeletonContainer}>
          <Skeleton variant="card" />
          <Skeleton variant="card" />
          <Skeleton variant="card" />
        </div>
      )}
      <div className={style.cardContainer}>
        {responce &&
          responce.result.map((server: IServer) => (
            <VMCard key={server.id} id={server.id} name={server.name} status={server.status} />
          ))}
      </div>
    </PageComponent>
  );
};
