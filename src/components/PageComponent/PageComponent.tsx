import { Skeleton } from '@/components';

import { convertTimestampsToTime } from '@/utils';

import { IPageProps } from './types';

import style from './PageComponent.module.scss';

export const PageComponent = ({ loading, username, children, time }: IPageProps) => {
  return (
    <div className={style.page}>
      <h1 className={style.header}>MonitoRing</h1>
      <div className={style.content}>
        <div className={style.infoTable}>
          <div className={style.infoRow}>
            <p>User:</p>
            <div>
              {loading ? <Skeleton variant="text" /> : <p>{username ? username : 'not tg'}</p>}
            </div>
          </div>
          <div className={style.infoRow}>
            <p>Role:</p>
            <div>{loading ? <Skeleton variant="text" /> : <p>Client/Company</p>}</div>
          </div>
          <div className={style.infoRow}>
            <p>Last Update:</p>
            <div>
              {loading ? (
                <Skeleton variant="text" />
              ) : (
                <p>{time ? convertTimestampsToTime(time) : '?'}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className={style.copyright}>© BigDigital</div>
    </div>
  );
};
