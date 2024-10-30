import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import style from './DoughnutChart.module.scss';
import { IChartsData, IChartsSettings } from '@/types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({
  chartsData,
  chartsSettings,
}: {
  chartsData: IChartsData;
  chartsSettings: IChartsSettings;
}) => {
  const { usedValue, totalValue } = chartsData;
  const { indicator, backgroundColor, hoverBackgroundColor, borderWidth, options } = chartsSettings;
  const data = {
    datasets: [
      {
        data: [usedValue, totalValue - usedValue],
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
        {((usedValue / totalValue) * 100).toFixed(2)}%
      </div>
    </div>
  );
};
