import { useAppNavigate } from '@/hooks';

import clsx from 'clsx';

import { IVMCardProps } from './types';

import style from './VMCard.module.scss';

export const VMCard = ({ name, status, id }: IVMCardProps) => {
  const { goToDoughnutCharts } = useAppNavigate();

  return (
    <div
      className={clsx(
        style.card,
        status === 'OK' && style.ok,
        status === 'ERROR' && style.error,
        status === 'WARN' && style.warn
      )}
      onClick={() => goToDoughnutCharts(id)}
    >
      <p className={style.name}>{name}</p>
      <p className={style.status}>{status}</p>
    </div>
  );
};
