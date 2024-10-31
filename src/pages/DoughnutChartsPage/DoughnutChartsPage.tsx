import { Button } from '@chakra-ui/react';
import { DoughnutChart } from '../../components/DoughnutChart/DoughnutChart';
import { userData } from '../../data';
import style from './DoughnutChartsPage.module.scss';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import {
  chartsOptionsForCPU,
  chartsOptionsForRAM,
  chartsOptionsForDISK,
  chartsOptionsForNET,
} from '@/components/DoughnutChart/options';

export const DoughnutChartsPage = () => {
  const { userDataCPU, userDataDISK, userDataNET, userDataRAM } = userData;
  const { goBack } = useAppNavigate();
  return (
    <div className={style.page}>
      <div>
        <DoughnutChart chartsData={userDataCPU} chartsOptions={chartsOptionsForCPU} />
        <Button className={style.btn}>Подробнее</Button>
      </div>
      <div>
        <DoughnutChart chartsData={userDataRAM} chartsOptions={chartsOptionsForRAM} />
        <Button className={style.btn}>Подробнее</Button>
      </div>
      <div>
        <DoughnutChart chartsData={userDataDISK} chartsOptions={chartsOptionsForDISK} />
        <Button className={style.btn}>Подробнее</Button>
      </div>
      <div>
        <DoughnutChart chartsData={userDataNET} chartsOptions={chartsOptionsForNET} />
        <Button className={style.btn}>Подробнее</Button>
      </div>
      <Button className={style.btn} onClick={() => goBack()}>
        Назад
      </Button>
    </div>
  );
};
