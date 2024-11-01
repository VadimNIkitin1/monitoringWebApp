import { useEffect } from 'react';

import { LineChart } from '@/components';
import { useAppNavigate, useTelegram } from '@/hooks';

import style from './LineChartPage.module.scss';

export const LineChartPage = () => {
  const { goBack } = useAppNavigate();
  const { tg } = useTelegram();

  useEffect(() => {
    tg.BackButton.show().onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  return (
    <div className={style.page}>
      <LineChart />
    </div>
  );
};
