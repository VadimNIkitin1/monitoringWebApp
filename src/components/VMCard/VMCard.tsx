import { useAppNavigate } from '@/hooks';

import clsx from 'clsx';
import style from './VMCard.module.scss';

interface IVMCardProps {
  id: number;
  name: string;
  status: string;
}

export const VMCard = ({ name, status, id }: IVMCardProps) => {
  const { goToDoughnutCharts } = useAppNavigate();
  return (
    <div
      className={clsx(
        style.card,
        status === 'OK' && style.up,
        status === 'ERROR' && style.disconect,
        status === 'WARN' && style.warn
      )}
      onClick={() => goToDoughnutCharts(id)}
    >
      <p className={style.name}>{name}</p>
      <p className={style.status}>{status}</p>
    </div>
  );
};
