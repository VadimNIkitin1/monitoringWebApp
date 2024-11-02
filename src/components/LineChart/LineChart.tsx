import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  ChartData,
  ChartOptions,
  TimeScale,
} from 'chart.js';

import { TypeLineChart } from '@/constans';
import { userData } from '@/data';

import style from './LineChart.module.scss';

ChartJS.register(ArcElement, CategoryScale, PointElement, LineElement, LinearScale, TimeScale);

const dataMapping = {
  [TypeLineChart.CPU]: userData.userDataCPU,
  [TypeLineChart.RAM]: userData.userDataRAM,
  [TypeLineChart.DISK]: userData.userDataDISK,
  [TypeLineChart.NET]: userData.userDataNET,
};

export const LineChart = ({ metricData }: any) => {
  const { values, total } = metricData;
  const { typelinecharts } = useParams();

  const howUsedData = (type: string | undefined): ChartData<'line', number[], string> => {
    const data = values.map((metric: any) => metric.value);
    const timestamp = values.map((metric: any) => metric.timestamp);

    function convertTimestampsToTime(arr: any) {
      return arr.map((timestamp: any) => {
        const date = new Date(timestamp * 1000);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
      });
    }

    return {
      labels: convertTimestampsToTime(timestamp),
      datasets: [
        {
          label: type,
          data: data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
  };

  const howUseOptions = (type: string | undefined): ChartOptions<'line'> => {
    const max = type ? dataMapping[type as TypeLineChart]?.totalValue : 100;

    return {
      scales: {
        y: {
          beginAtZero: true,
          max: total,
          ticks: {
            stepSize: max < 10 ? 1 : 10,
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
  };

  return (
    <div className={style.container}>
      <Line data={howUsedData(typelinecharts)} options={howUseOptions(typelinecharts)} />
    </div>
  );
};
