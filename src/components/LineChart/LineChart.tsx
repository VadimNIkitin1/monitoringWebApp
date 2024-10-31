import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
} from 'chart.js';
import style from './LineChart.module.scss';
import { IChartsData } from '@/types';

ChartJS.register(ArcElement, CategoryScale, PointElement, LineElement, LinearScale);

export const LineChart = ({
  chartsData,
  chartsOptions,
}: {
  chartsData: IChartsData;
  chartsOptions: any;
}) => {
  const labels = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ];
  const { usedValue } = chartsData;
  const { indicator, options } = chartsOptions;
  const data = {
    labels: labels,
    datasets: [
      {
        label: indicator,
        data: [10, 10, 10, 10, 30, 10, 10, 10, 80, 10, usedValue],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={style.container}>
      <Line data={data} options={options} />
    </div>
  );
};
