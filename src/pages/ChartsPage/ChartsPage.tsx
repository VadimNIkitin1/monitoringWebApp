import { Button } from '@chakra-ui/react';
import { DoughnutChart } from '../../components/DoughnutChart/DoughnutChart';
import { userData } from '../../data';
import style from './ChartsPage.module.scss';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import {
  chartsSettingsForCPU,
  chartsSettingsForRAM,
  chartsSettingsForDISK,
  chartsSettingsForNET,
} from '@/components/DoughnutChart/options';

export const ChartsPage = () => {
  const { userDataCPU, userDataDISK, userDataNET, userDataRAM } = userData;
  const { goBack } = useAppNavigate();
  return (
    <div className={style.page}>
      <div>
        <DoughnutChart chartsData={userDataCPU} chartsSettings={chartsSettingsForCPU} />
        <Button className={style.btn}>Подробнее</Button>
      </div>
      <div>
        <DoughnutChart chartsData={userDataRAM} chartsSettings={chartsSettingsForRAM} />
        <Button className={style.btn}>Подробнее</Button>
      </div>
      <div>
        <DoughnutChart chartsData={userDataDISK} chartsSettings={chartsSettingsForDISK} />
        <Button className={style.btn}>Подробнее</Button>
      </div>
      <div>
        <DoughnutChart chartsData={userDataNET} chartsSettings={chartsSettingsForNET} />
        <Button className={style.btn}>Подробнее</Button>
      </div>
      <Button className={style.btn} onClick={() => goBack()}>
        Назад
      </Button>
    </div>
  );
};
