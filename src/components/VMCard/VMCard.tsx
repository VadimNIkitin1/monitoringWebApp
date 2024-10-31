import clsx from 'clsx';
import style from './VMCard.module.scss';
import { useAppNavigate } from '@/hooks/useAppNavigate';

interface IVMCardProps {
  name: string;
  status: string;
}

export const VMCard = ({ name, status }: IVMCardProps) => {
  const { goToDoughnutCharts } = useAppNavigate();
  return (
    <div
      className={clsx(
        style.card,
        status === 'up' && style.up,
        status === 'disconect' && style.disconect,
        status === 'warn' && style.warn
      )}
      onClick={() => goToDoughnutCharts()}
    >
      <p className={style.name}>{name}</p>
      <p className={style.status}>{status}</p>
    </div>
  );
};
