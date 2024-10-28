import clsx from 'clsx';
import style from './VMCard.module.scss';

interface IVMCardProps {
  name: string;
  status: string;
}

export const VMCard = ({ name, status }: IVMCardProps) => {
  return (
    <div
      className={clsx(
        style.card,
        status === 'up' && style.up,
        status === 'disconect' && style.disconect,
        status === 'warn' && style.warn
      )}
    >
      <p className={style.name}>{name}</p>
      <p className={style.status}>{status}</p>
    </div>
  );
};
