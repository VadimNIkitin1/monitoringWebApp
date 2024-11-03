export interface IResponceLineChartPage {
  result: IResultLineChartPage;
  timestamp?: number;
}

export interface IResultLineChartPage {
  description: string;
  interval: string;
  owner_id: number;
  total: number;
  type: string;
  values: IValueLineChartPage[];
}

export interface IValueLineChartPage {
  timestamp: number;
  value: string;
}
