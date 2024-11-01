export interface IMetrics {
  type: string;
  total: number;
  values: number;
  interval: string;
  description: string;
}

export interface IDataMetrics {
  cpu: IMetrics;
  ram: IMetrics;
  disk: IMetrics;
  net: IMetrics;
  owner_id: number;
}
