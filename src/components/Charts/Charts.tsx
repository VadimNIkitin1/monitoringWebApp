import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import style from './Charts.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const totalMemory = 8; // Всего памяти (например, 8 ГБ)
const usedMemory = 3; // Использованная память (например, 3 ГБ)

export const MemoryUsageChart = () => {
  const data = {
    labels: [`Всего ${totalMemory}ГБ`, `Используется ${usedMemory}ГБ`],
    datasets: [
      {
        data: [usedMemory, totalMemory - usedMemory], // Использованная и оставшаяся память
        backgroundColor: ['green', 'yellow'], // Цвета: зелёный для использованной и жёлтый для оставшейся
        hoverBackgroundColor: ['green', 'yellow'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%', // Размер внутреннего выреза (настраивает толщину кольца)
    plugins: {
      legend: {
        display: true, // Отображение легенды
        position: 'bottom' as const,
      },
      tooltip: {
        enabled: false, // Подсказки при наведении
      },
    },
    animation: {
      animateRotate: true,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      <Doughnut data={data} options={options} />
      <div className={style.centerText}>
        CPU{'\n'}
        {usedMemory}гб / {totalMemory}гб
      </div>
    </div>
  );
};
