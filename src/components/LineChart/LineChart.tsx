import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  TimeScale,
  ChartData,
} from 'chart.js';

import { convertTimestampsToTime, howUseColor } from '@/utils';

import style from './LineChart.module.scss';

import { IResultLineChartPage } from '@/pages';

ChartJS.register(ArcElement, CategoryScale, PointElement, LineElement, LinearScale, TimeScale);

export const LineChart = ({ values, total, type }: IResultLineChartPage) => {
  const data: ChartData<'line', any[], string> = {
    labels: convertTimestampsToTime(values),
    datasets: [
      {
        label: type,
        data: values.map((metric: any) => metric.value),
        fill: false,
        borderColor: howUseColor(type)[0],
        tension: 0.1,
        pointStyle: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: total,
        ticks: {
          stepSize: 10,
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        title: {
          display: true,
          text: 'Value',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
    },
  };

  return (
    <div className={style.container}>
      <Line data={data} options={options} />
    </div>
  );
};
