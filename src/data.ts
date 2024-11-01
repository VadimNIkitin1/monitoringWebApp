// формат данных для кольцевого графика

export const userData = {
  userDataCPU: {
    totalValue: 100,
    usedValue: [10, 10, 10, 10, 30, 10, 10, 10, 80, 10, 10],
  },
  userDataRAM: {
    totalValue: 8,
    usedValue: [3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2],
  },
  userDataDISK: {
    totalValue: 220,
    usedValue: [50, 50, 55, 55, 55, 55, 110, 110, 110, 110, 110],
  },
  userDataNET: {
    totalValue: 100,
    usedValue: [20, 20, 20, 20, 20, 20, 44, 11, 11, 33, 33],
  },
};

// // Формат данных для первой страницы

// interface FirstPageData {
//   user: string;
//   role: string;
//   machineList: [
//     {
//       id: number;
//       name: string;
//       status: string;
//     },
//   ];
// }

// // Формат данных для кольцевых графиков
// interface DoughnutData {}

// // Формат данных для линейных графиков
// interface LineData {}
