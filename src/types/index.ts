export interface IChartsData {
  totalValue: number;
  usedValue: number[];
}

export interface IChartsOptions {
  indicator: string;
  backgroundColor: string[];
  hoverBackgroundColor: string[];
  borderWidth: number;
  options: {};
}

export interface IServer {
  id: number;
  name: string;
  status: string;
}
