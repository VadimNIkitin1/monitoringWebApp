import { IChartsSettings } from '@/types';

export const chartsSettingsForCPU: IChartsSettings = {
  indicator: 'CPU',
  backgroundColor: ['#025500', '#80ec81'],
  hoverBackgroundColor: ['#025500', '#80ec81'],
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

export const chartsSettingsForRAM: IChartsSettings = {
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

export const chartsSettingsForDISK: IChartsSettings = {
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

export const chartsSettingsForNET: IChartsSettings = {
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
