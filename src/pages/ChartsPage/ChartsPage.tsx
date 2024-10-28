import { Button } from '@chakra-ui/react';
import { DoughnutChart } from '../../components/DoughnutChart/DoughnutChart';
import { userData } from '../../data';
import style from './ChartsPage.module.scss';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export const ChartsPage = () => {
  const { goBack } = useAppNavigate();
  return (
    <div className={style.page}>
      <DoughnutChart incomingData={userData} />
      <div>
        <Button className={style.btn} onClick={() => goBack()}>
          Назад
        </Button>
        <Button className={style.btn}>Подробнее</Button>
      </div>
    </div>
  );
};
