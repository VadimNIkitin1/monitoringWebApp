import { useEffect } from 'react';

import { useMonitoringStore } from '@/store';
import { useTelegram } from '@/hooks';
import { VMCard, Skeleton, PageComponent, Alert } from '@/components';
import { IServer } from './types';

import style from './MonitoringPage.module.scss';

export const MonitoringPage = () => {
  const { tg, username } = useTelegram();
  const { responce, loading, error, getServerList } = useMonitoringStore();
  console.log(responce);

  useEffect(() => {
    getServerList();
  }, []);

  useEffect(() => {
    tg.expand();
    tg.BackButton.hide();
  }, []);

  return (
    <PageComponent loading={loading} username={username} time={responce?.timestamp}>
      {!error && !responce?.result.length && !loading && (
        <Alert status="info">Нет серверов в работе!</Alert>
      )}
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
          responce.result &&
          responce.result.map((server: IServer) => (
            <VMCard key={server.id} name={server.name} status={server.status} id={server.id} />
          ))}
      </div>
    </PageComponent>
  );
};
