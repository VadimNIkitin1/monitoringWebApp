import clsx from 'clsx';
import style from './Alert.module.scss';
import { AlertProps } from './types';
import { TbAlertSquareRoundedFilled, TbAlertTriangle } from 'react-icons/tb';

export const Alert = ({ status, children }: AlertProps) => {
  return (
    <div className={clsx(style.alert, status && style[status])}>
      {status == 'info' && <TbAlertSquareRoundedFilled className={style.icon} />}
      {status == 'error' && <TbAlertTriangle className={style.icon} />}
      <p className={style.text}>{children}</p>
    </div>
  );
};
