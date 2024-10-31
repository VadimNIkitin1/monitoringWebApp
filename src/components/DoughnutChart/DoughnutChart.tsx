import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import style from './DoughnutChart.module.scss';
import { IChartsData, IChartsOptions } from '@/types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({
  chartsData,
  chartsOptions,
}: {
  chartsData: IChartsData;
  chartsOptions: IChartsOptions;
}) => {
  const { usedValue, totalValue } = chartsData;
  const { indicator, backgroundColor, hoverBackgroundColor, borderWidth, options } = chartsOptions;
  const data = {
    datasets: [
      {
        data: [usedValue.at(-1), totalValue - usedValue.at(-1)!],
        backgroundColor,
        hoverBackgroundColor,
        borderWidth,
      },
    ],
  };

  return (
    <div className={style.container}>
      <Doughnut data={data} options={options} />
      <div className={style.centerText}>
        {indicator}
        {'\n'}
        {((usedValue.at(-1)! / totalValue) * 100).toFixed(2)}%
      </div>
    </div>
  );
};
