export interface IResponceDoughnutChartPage {
  result: IResultDoughnutChartPage;
  timestamp: number;
}

export interface IResultDoughnutChartPage {
  cpu: IValueDoughnutChartPage;
  ram: IValueDoughnutChartPage;
  disk: IValueDoughnutChartPage;
  net: IValueDoughnutChartPage;
  owner_id: number | undefined;
}

export interface IValueDoughnutChartPage {
  description: string;
  interval: string;
  owner_id: number | undefined;
  total: number;
  type: string;
  values: number;
}
