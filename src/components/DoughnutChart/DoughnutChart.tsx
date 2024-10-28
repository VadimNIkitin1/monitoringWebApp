import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import style from './DoughnutChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ incomingData }: any) => {
  const data = {
    label: '2020',
    datasets: [
      {
        data: [incomingData.usedValue, incomingData.totalValue - incomingData.usedValue],
        backgroundColor: ['green', 'yellow'],
        hoverBackgroundColor: ['green', 'yellow'],
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
      tooltip: {
        enabled: false,
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
        CPU{'\n'}
        {incomingData.usedValue}гб / {incomingData.totalValue}гб
      </div>
    </div>
  );
};
