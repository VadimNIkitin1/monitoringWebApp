import {
  IResponceDoughnutChartPage,
  IResponceForMonitoringPage,
  IResponceLineChartPage,
} from '@/pages';

export interface MonitoringPageState {
  responce: IResponceForMonitoringPage | null;
  loading: boolean;
  error: any;
  getServerList: () => Promise<void>;
}

export interface DoughnutPageState {
  responce: IResponceDoughnutChartPage | null;
  loading: boolean;
  error: any;
  getServerMetrics: (id: string | undefined) => Promise<void>;
}

export interface LinePageState {
  responce: IResponceLineChartPage | null;
  loading: boolean;
  error: any;
  getServerOneMetric: (
    id: string | undefined,
    type: string | undefined,
    interval: string | undefined
  ) => Promise<void>;
}
