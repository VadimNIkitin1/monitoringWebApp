import { Line } from 'react-chartjs-2';
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
import style from './LineChart.module.scss';
import { useParams } from 'react-router-dom';
import { TypeLineChart } from '@/constans';
import { userData } from '@/data';
import { generateHourlyLabels } from '@/utils/generateHourlyLabels';

ChartJS.register(ArcElement, CategoryScale, PointElement, LineElement, LinearScale, TimeScale);

const dataMapping = {
  [TypeLineChart.CPU]: userData.userDataCPU,
  [TypeLineChart.RAM]: userData.userDataRAM,
  [TypeLineChart.DISK]: userData.userDataDISK,
  [TypeLineChart.NET]: userData.userDataNET,
};

export const LineChart = () => {
  const { typelinecharts } = useParams();

  const howUsedData = (type: string | undefined): ChartData<'line', number[], string> => {
    const labels = generateHourlyLabels();
    const selectedData = type ? dataMapping[type as TypeLineChart]?.usedValue : [];

    return {
      labels,
      datasets: [
        {
          label: type,
          data: selectedData,
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
          max,
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
