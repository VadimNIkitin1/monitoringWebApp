import { LineChart } from '@/components/LineChart/LineChart';
import { userData } from '@/data';
import { chartsOptionsForCPU } from '@/components/LineChart/options';
import style from './LineChartPage.module.scss';

export const LineChartPage = () => {
  const { userDataCPU } = userData;

  return (
    <div className={style.page}>
      <LineChart chartsData={userDataCPU} chartsOptions={chartsOptionsForCPU} />
    </div>
  );
};
