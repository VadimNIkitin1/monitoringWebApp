import { IChartsOptions } from '@/types';

export const chartsOptionsForCPU = {
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 10, // Шаг делений - 10%
      },
      title: {
        display: true,
        text: 'CPU Load (%)',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Time',
      },
    },
  },
};

export const chartsOptionsForRAM: IChartsOptions = {
  indicator: 'RAM',
  backgroundColor: ['#4a1210', '#e5509c'],
  hoverBackgroundColor: ['#4a1210', '#e5509c'],
  borderWidth: 0,
  options: {
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
  },
};

export const chartsOptionsForDISK: IChartsOptions = {
  indicator: 'DISK',
  backgroundColor: ['#6e5f00', '#f6e163'],
  hoverBackgroundColor: ['#6e5f00', '#f6e163'],
  borderWidth: 0,
  options: {
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
  },
};

export const chartsOptionsForNET: IChartsOptions = {
  indicator: 'NET',
  backgroundColor: ['#02555c', '#56eaf9'],
  hoverBackgroundColor: ['#02555c', '#56eaf9'],
  borderWidth: 0,
  options: {
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
  },
};
