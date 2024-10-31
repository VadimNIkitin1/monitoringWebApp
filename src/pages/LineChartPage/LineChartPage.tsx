import { LineChart } from '@/components/LineChart/LineChart';
import style from './LineChartPage.module.scss';
import { Button } from '@/components/ui/button';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { useEffect } from 'react';
import { useTelegram } from '@/hooks/useTelegram';

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
      <Button onClick={() => goBack()}>Назад</Button>
    </div>
  );
};
