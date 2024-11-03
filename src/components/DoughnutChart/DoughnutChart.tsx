import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { howUseColor } from '@/utils';

import style from './DoughnutChart.module.scss';

import { IValueDoughnutChartPage } from '@/pages';
import { useAppNavigate } from '@/hooks';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ total, type, values }: IValueDoughnutChartPage) => {
  const { goToLineChart } = useAppNavigate();

  const data = {
    datasets: [
      {
        data: [values, total - values],
        backgroundColor: howUseColor(type),
        hoverBacgroundColor: howUseColor(type),
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
    <div className={style.container} onClick={() => goToLineChart(type)}>
      <Doughnut data={data} options={options} />
      <div className={style.centerText}>
        {type.toUpperCase()}
        {'\n'}
        {((values / total) * 100).toFixed(2)}%
      </div>
    </div>
  );
};
