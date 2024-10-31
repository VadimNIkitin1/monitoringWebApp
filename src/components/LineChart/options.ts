import { generateHourlyLabels } from '@/utils/generateHourlyLabels';

export interface ILineChartOptions {
  label: string;
  labels: string[];
  scales: {};
}

export const chartsOptionsForCPU: ILineChartOptions = {
  label: 'CPU',
  labels: generateHourlyLabels(),
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 10,
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

export const chartsOptionsForRAM: ILineChartOptions = {
  label: 'CPU',
  labels: [
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
  ],
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 10,
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

export const chartsOptionsForDISK: ILineChartOptions = {
  label: 'CPU',
  labels: [
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
  ],
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 10,
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

export const chartsOptionsForNET: ILineChartOptions = {
  label: 'CPU',
  labels: [
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
  ],
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 10,
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
