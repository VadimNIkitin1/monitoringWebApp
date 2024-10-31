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
import { ILineChartOptions } from './options';

ChartJS.register(ArcElement, CategoryScale, PointElement, LineElement, LinearScale);

export const LineChart = ({
  chartsData,
  chartsOptions,
}: {
  chartsData: IChartsData;
  chartsOptions: ILineChartOptions;
}) => {
  const { usedValue } = chartsData;

  const { label, labels, scales } = chartsOptions;

  const data = {
    labels,
    datasets: [
      {
        label,
        data: [10, 10, 10, 10, 30, 10, 10, 10, 80, 10, usedValue],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={style.container}>
      <Line data={data} options={scales} />
    </div>
  );
};
