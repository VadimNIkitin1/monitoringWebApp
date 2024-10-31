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
import { TypeLineChart } from '@/constans';
import { useTelegram } from '@/hooks/useTelegram';
import { useEffect } from 'react';

export const DoughnutChartsPage = () => {
  const { userDataCPU, userDataDISK, userDataNET, userDataRAM } = userData;
  const { goBack, goToLineChart } = useAppNavigate();
  const { tg } = useTelegram();

  useEffect(() => {
    tg.BackButton.show().onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  return (
    <div className={style.page}>
      <div onClick={() => goToLineChart(TypeLineChart.CPU)}>
        <DoughnutChart chartsData={userDataCPU} chartsOptions={chartsOptionsForCPU} />
      </div>
      <div onClick={() => goToLineChart(TypeLineChart.RAM)}>
        <DoughnutChart chartsData={userDataRAM} chartsOptions={chartsOptionsForRAM} />
      </div>
      <div onClick={() => goToLineChart(TypeLineChart.DISK)}>
        <DoughnutChart chartsData={userDataDISK} chartsOptions={chartsOptionsForDISK} />
      </div>
      <div onClick={() => goToLineChart(TypeLineChart.NET)}>
        <DoughnutChart chartsData={userDataNET} chartsOptions={chartsOptionsForNET} />
      </div>
    </div>
  );
};
