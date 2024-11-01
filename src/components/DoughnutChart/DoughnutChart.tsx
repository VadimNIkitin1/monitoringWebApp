import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { howUseColor } from '@/utils';

import { IDoughnutData } from './types';

import style from './DoughnutChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ chartsData }: { chartsData: IDoughnutData }) => {
  console.log(chartsData);
  const { total, values, type } = chartsData;

  const data = {
    datasets: [
      {
        label: 'CPU',
        data: [values, total - values],
        backgroundColor: howUseColor(type),
        hoverBackgroundColor: howUseColor(type),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
      },
    },
    animation: {
      animateRotate: true,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className={style.container}>
      <Doughnut data={data} options={options} />
      <div className={style.centerText}>
        {type}
        {'\n'}
        {((values / total) * 100).toFixed(2)}%
      </div>
    </div>
  );
};
